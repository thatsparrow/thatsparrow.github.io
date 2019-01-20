package app.android.example.com.insight;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.maps.CameraUpdate;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    private static final double SEATTLE_LAT = 47.60621, SEATTLE_LNG = -122.33207;

    private static final float DEFAULTZOOM = 10;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);

        Toast.makeText(this, "haisdhasd", Toast.LENGTH_SHORT).show();

        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
    }

    public boolean servicesOK() {
        int isAvailable = GooglePlayServicesUtil.isGooglePlayServicesAvailable(this);

        if (isAvailable == ConnectionResult.SUCCESS) {
            return true;
        } else {
            Toast.makeText(this, "can't connect", Toast.LENGTH_SHORT).show();

        }
        return false;
    }

    private boolean initMap() {
        if (mMap == null) {
            SupportMapFragment mapFrag = (SupportMapFragment) getSupportFragmentManager()
                    .findFragmentById(R.id.map);
            mMap = mapFrag.getMap();
        }
        return mMap != null;
    }

    public void geoLocate(View v) {
        hideSoftKeyboard(v);

        EditText et = (EditText) findViewById(R.id.editText1);
        String location = et.getText().toString();

        Toast.makeText(this, location, Toast.LENGTH_LONG).show();
    }

    private void hideSoftKeyboard(View v) {
        InputMethodManager imm = (InputMethodManager) getSystemService(INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(v.getWindowToken(), 0);
    }

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker in Sydney and move the camera
//        LatLng sydney = new LatLng(-34, 151);
//        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
//        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));



        goToLocation(SEATTLE_LAT, SEATTLE_LNG, DEFAULTZOOM);
    }

    private void goToLocation(double lat, double lng, float zoom) {

        LatLng ll = new LatLng(lat, lng);
        CameraUpdate update = CameraUpdateFactory.newLatLngZoom(ll, zoom);

        mMap.moveCamera(update);

    }

}
