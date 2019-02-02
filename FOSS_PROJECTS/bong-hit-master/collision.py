"""
Created on Mon Feb 22 19:50:25 2016
BONG HIT v3
author: @thatsparrow
"""

import pygame

pygame.mixer.init()
pygame.mixer.music.load('test.mp3')
pygame.mixer.music.play(-1)


def checkCollision(x,y,objectX,objectY):
    collision = False
    #y-collisions, then x-collisions nested
    if y >= objectY and y <= objectY + 40:              #head hits
        if x >= objectX and x <= objectX + 35:          #left side
            y = 650
            collision = True
        elif x + 35 >= objectX and x + 35 <= objectX + 35: #right side
            y = 650
            collision = True
    elif y + 40 >= objectY and y + 40 <= objectY + 40:  #back of character hits
        if x >= objectX and x <= objectX + 35:
            y = 650
            collision = True
        elif x + 35 >= objectX and x + 35 <= objectX + 35:
            y = 650
            collision = True
    return collision,y

def enemyMovement(enemyX,movingRight,speed,leftBound,rightBound):  #enemy motion function
    if enemyX > rightBound:                             
        movingRight = False
    elif enemyX <= leftBound:
        movingRight = True
    if movingRight == True:
        enemyX += speed
    else:
        enemyX -= speed
    return enemyX,movingRight

pygame.init()                                         #initializes pygame
screen = pygame.display.set_mode((700,700))

finished = False                                      #booleans must have capital first letters
x = 350-50/2                                          #player starting location
y = 600

playerImage = pygame.image.load("player.png")
playerImage = pygame.transform.scale(playerImage, (50,50))
playerImage = playerImage.convert_alpha()

background = pygame.image.load("background.png")
background = pygame.transform.scale(background, (700,700))
background = background.convert()

treasureImage = pygame.image.load("treasure.png")
treasureImage = pygame.transform.scale(treasureImage, (100,100))
treasureImage = treasureImage.convert_alpha()

enemy1 = pygame.image.load("enemy.png")
enemy1 = pygame.transform.scale(enemy1, (100,100))
enemy1 = enemy1.convert_alpha()

enemy2 = pygame.image.load("enemy.png")
enemy2 = pygame.transform.scale(enemy2, (100,100))
enemy2 = enemy2.convert_alpha()

enemy3 = pygame.image.load("enemy.png")
enemy3 = pygame.transform.scale(enemy3, (170,170))
enemy3 = enemy3.convert_alpha()

enemy4 = pygame.image.load("enemy.png")
enemy4 = pygame.transform.scale(enemy4, (200,200))
enemy4 = enemy4.convert_alpha()

treasureX = 350-100/2
treasureY = 50

enemy1X = 50+100/2
enemy1Y = 450-10

enemy2X = 50-100/2
enemy2Y = 300+10

enemy3X = 150+20
enemy3Y = 160+20

enemy4X = 750
enemy4Y = 600-30

movingRight1 = True
movingRight2 = False
movingRight3 = True
movingRight4 = False

speed1 = 5
speed2 = 7
speed3 = 6
speed4 = 4

font = pygame.font.SysFont("comicsans",50)
level = 1

frame = pygame.time.Clock()
collisionWin = False
collisionLose = False

while finished == False:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            finished = True

    enemy1X,movingRight1 = enemyMovement(enemy1X,movingRight1,speed1,50,550)
    enemy2X,movingRight2 = enemyMovement(enemy2X,movingRight2,speed2,50,550)

    pressedKeys = pygame.key.get_pressed()
    if pressedKeys[pygame.K_UP] or pressedKeys[pygame.K_w] == 1:
        y = y - 5
    elif pressedKeys[pygame.K_DOWN] or pressedKeys[pygame.K_s] == 1:
        y = y + 5   

            
    screen.blit(background, (0,0))
    screen.blit(treasureImage,(treasureX,treasureY))
    screen.blit(playerImage,(x,y))
    screen.blit(enemy1,(enemy1X,enemy1Y))
    screen.blit(enemy2,(enemy2X,enemy2Y))

    if level > 7:
        enemy3X,movingRight3 = enemyMovement(enemy3X,movingRight3,speed3,100,400)
        screen.blit(enemy3,(enemy3X,enemy3Y))

    if level > 10:
        enemy4X,movingRight4 = enemyMovement(enemy4X,movingRight4,speed4,100,600)
        screen.blit(enemy4,(enemy4X,enemy4Y))

    collisionWin,y = checkCollision(x,y,treasureX,treasureY)
    collisionEnemy1,y = checkCollision(x,y,enemy1X,enemy1Y)
    collisionEnemy2,y = checkCollision(x,y,enemy2X,enemy2Y)

    if level > 5:
        collisionEnemy3,y = checkCollision(x,y,enemy3X,enemy3Y)
    else:
        collisionEnemy3 = False

    if level > 10:
        collisionEnemy4,y = checkCollision(x,y,enemy4X,enemy4Y)
    else:
        collisionEnemy4 = False

    if collisionEnemy1 or collisionEnemy2 or collisionEnemy3 or collisionEnemy4 == True:
        collisionLose = True

    if collisionWin == True:
        level += 1
        if level == 6:
            speed1 = 5
            speed2 = 7
            speed3 = 6
            speed4 = 4
        elif level == 11:
            speed1 = 6
            speed2 = 8
            speed3 = 7
            speed4 = 5
        else:
            speed1 = speed1 * 1.4
            speed2 = speed2 * 1.4
            speed3 = speed3 * 1.4
            speed4 = speed4 * 1.4

        red = (255,50,50)
        orange = (255,127,0)
        yellow = (255,255,0)
        green = (0,255,0)
        blue = (0,0,255)
        purple = (255,0,255)
        white = (255,255,255)
        black = (0,0,0)
        
        colorChoice = {2:red, 3:orange, 4:yellow, 5:green, 6:blue, 7:purple, 0:white, 1:black}
            
        textWin = font.render("Great! Level "+str(level),True,colorChoice[level%8])        #to display text when colliding with treasure
        screen.blit(textWin,(470 - textWin.get_width()/1,250 - textWin.get_height()/2))
        pygame.display.flip()
        frame.tick(1)


    elif collisionLose == True:
        speed1 = 5
        speed2 = 7
        speed3 = 6
        speed4 = 4
        textLose = font.render("You fucked up.",True,(255,0,0))        #to display text when colliding with enemy
        screen.blit(textLose,(470 - textLose.get_width()/1,250 - textLose.get_height()/2))
        level = 1
        pygame.display.flip()
        frame.tick(1)
        collisionLose = False

        pygame.mixer.init()
        pygame.mixer.music.load('test.mp3')
        pygame.mixer.music.play(-1)
        
    pygame.display.flip()
    frame.tick(30)                                   #sets frame rate to 30 frames per second
    