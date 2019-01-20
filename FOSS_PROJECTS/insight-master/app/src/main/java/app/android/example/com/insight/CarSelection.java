package app.android.example.com.insight;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Spinner;

/**
 * Created by lab on 6/18/2016.
 */
public class CarSelection extends Fragment {

    private ListView carsListView;
    private boolean makeSpinnerSelected = false;
    private boolean modelSpinnerSelected = false;
    private boolean yearSpinnerSelected = false;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.car_selection_layout, container, false);

        carsListView = (ListView) view.findViewById(R.id.car_selector_listview);
        final Button submitButton = (Button) view.findViewById(R.id.submit_button);
        submitButton.setClickable(false);

        submitButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                ((MainActivity) getActivity()).setCurrentItem (1, true);
            }
        });

        final Spinner makeSpinner = (Spinner) view.findViewById(R.id.make_spinner);
        final ArrayAdapter<CharSequence> makeAdapter = ArrayAdapter.createFromResource(view.getContext(),
                R.array.car_make_array, android.R.layout.simple_spinner_item);
        makeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        makeSpinner.setAdapter(makeAdapter);
        makeSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                makeSpinnerSelected = true;

                if (makeSpinnerSelected && modelSpinnerSelected && yearSpinnerSelected) {
                    submitButton.setClickable(true);
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        Spinner modelSpinner = (Spinner) view.findViewById(R.id.model_spinner);
        final ArrayAdapter<CharSequence> modelAdapter = ArrayAdapter.createFromResource(view.getContext(),
                R.array.car_model_array, android.R.layout.simple_spinner_item);
        modelAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        modelSpinner.setAdapter(modelAdapter);
        modelSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                modelSpinnerSelected = true;

                if (makeSpinnerSelected && modelSpinnerSelected && yearSpinnerSelected) {
                    submitButton.setClickable(true);
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });


        Spinner yearSpinner = (Spinner) view.findViewById(R.id.year_spinner);
        final ArrayAdapter<CharSequence> yearAdapter = ArrayAdapter.createFromResource(view.getContext(),
                R.array.car_year_array, android.R.layout.simple_spinner_item);
        yearAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        yearSpinner.setAdapter(yearAdapter);
        yearSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                yearSpinnerSelected = true;

                if (makeSpinnerSelected && modelSpinnerSelected && yearSpinnerSelected) {
                    submitButton.setClickable(true);
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        return view;
    }
}
