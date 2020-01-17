      google.charts.load('current', {
        'packages': ['timeline']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({
          type: 'string',
          id: 'day'
        });
        dataTable.addColumn({
          type: 'string',
          id: 'Routine'
        });
        dataTable.addColumn({
          type: 'date',
          id: 'Start'
        });
        dataTable.addColumn({
          type: 'date',
          id: 'End'
        });

        dataTable.addRows([
          ['Weekday', 'Sleep', new Date(0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 7, 0, 0)],
          ['Weekday', 'Breakfast', new Date(0, 0, 0, 7, 0, 0), new Date(0, 0, 0, 7, 30, 0)],
          ['Weekday', 'Email/Breakfast', new Date(0, 0, 0, 7, 30, 0), new Date(0, 0, 0, 8, 0, 0)],
          ['Weekday', 'Work', new Date(0, 0, 0, 8, 0, 0), new Date(0, 0, 0, 11, 0, 0)],
          ['Weekday', 'Striking or S&C', new Date(0, 0, 0, 11, 0, 0), new Date(0, 0, 0, 13, 30, 0)],
          ['Weekday', 'Lunch', new Date(0, 0, 0, 13, 30, 0), new Date(0, 0, 0, 14, 0, 0)],
          ['Weekday', 'Work', new Date(0, 0, 0, 14, 0, 0), new Date(0, 0, 0, 17, 0, 0)],
          ['Weekday', 'Nap', new Date(0, 0, 0, 17, 0, 0), new Date(0, 0, 0, 18, 30, 0)],
          ['Weekday', 'RBC or S&C', new Date(0, 0, 0, 18, 30, 0), new Date(0, 0, 0, 21, 0, 0)],
          ['Weekday', 'Email/Dinner', new Date(0, 0, 0, 21, 0, 0), new Date(0, 0, 0, 22, 0, 0)],
          ['Weekday', 'Entertainment', new Date(0, 0, 0, 22, 0, 0), new Date(0, 0, 0, 23, 0, 0)],
          ['Weekday', 'Sleep', new Date(0, 0, 0, 23, 0, 0), new Date(0, 0, 0, 24, 0, 0)],

          ['Weekend', 'Sleep', new Date(0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 7, 0, 0)],
          ['Weekend', 'Breakfast', new Date(0, 0, 0, 7, 0, 0), new Date(0, 0, 0, 7, 30, 0)],
          ['Weekend', 'Email/Breakfast', new Date(0, 0, 0, 7, 30, 0), new Date(0, 0, 0, 8, 0, 0)],
          ['Weekend', 'Work', new Date(0, 0, 0, 8, 0, 0), new Date(0, 0, 0, 11, 0, 0)],
          ['Weekend', 'Striking or S&C', new Date(0, 0, 0, 11, 0, 0), new Date(0, 0, 0, 13, 30, 0)],
          ['Weekend', 'Lunch', new Date(0, 0, 0, 13, 30, 0), new Date(0, 0, 0, 14, 0, 0)],
          ['Weekend', 'Work', new Date(0, 0, 0, 14, 0, 0), new Date(0, 0, 0, 17, 0, 0)],
          ['Weekend', 'Nap', new Date(0, 0, 0, 17, 0, 0), new Date(0, 0, 0, 18, 30, 0)],
          ['Weekend', 'RBC or S&C', new Date(0, 0, 0, 18, 30, 0), new Date(0, 0, 0, 21, 0, 0)],
          ['Weekend', 'Email/Dinner', new Date(0, 0, 0, 21, 0, 0), new Date(0, 0, 0, 22, 0, 0)],
          ['Weekend', 'Entertainment', new Date(0, 0, 0, 22, 0, 0), new Date(0, 0, 0, 23, 0, 0)],
          ['Weekend', 'Sleep', new Date(0, 0, 0, 23, 0, 0), new Date(0, 0, 0, 24, 0, 0)],
        ]);

        var options = {
          timeline: {
            showRowLabels: true,
            avoidOverlappingGridLines: false
          }
        };

        chart.draw(dataTable, options);

        var addEvent = function(object, type, callback) {
          if (object == null || typeof(object) == 'undefined') return;
          if (object.addEventListener) {
            object.addEventListener(type, callback, false);
          } else if (object.attachEvent) {
            object.attachEvent("on" + type, callback);
          } else {
            object["on" + type] = callback;
          }
        };

        addEvent(window, "resize", function(event) {
          chart.draw(dataTable, options);
        });

      }
