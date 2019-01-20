package app.android.example.com.insight;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;

/**
 * Created by lab on 6/18/2016.
 */
public class MainActivity extends FragmentActivity{

    private ViewPager viewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        viewPager = (ViewPager) findViewById(R.id.pager);
        FragmentManager fragmentManager = getSupportFragmentManager();
        viewPager.setAdapter(new MyAdapter(fragmentManager));
    }

    public void setCurrentItem (int item, boolean smoothScroll) {
        viewPager.setCurrentItem(item, smoothScroll);
    }

    //TODO: Move onto the next page while saving data gotten from current page.
    public void sendToMaps(View view) {
        Intent sendToMapClass = new Intent(this, MapsActivity.class);
   //     sendToMapClass.putExtra("names_array", names); //in other class need to grab the array list by doing
        //ArrayList<String> names = activityThatCalled.getExtras().getString("names_array");
        startActivity(sendToMapClass);
    }

}

class MyAdapter extends FragmentPagerAdapter {

    Fragment carSelection = new CarSelection();
    Fragment peopleDriven = new PeopleDriven();

    public MyAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int i) {

        if (i == 0)
        {
            return carSelection;
        }
        if (i == 1)
        {
            return peopleDriven;
        }
        return new Fragment();
    }

    @Override
    public int getCount() {
        return 2;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, Object object) {
        super.destroyItem(container, position, object);
    }
}