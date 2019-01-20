package app.android.example.com.insight;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by lab on 6/18/2016.
 */
public class PeopleDriven extends Fragment {

    private View view;
    private LinearLayout layout;
    private EditText editText;
    private Button button;
    private ArrayList<String> names;
    private ArrayList<EditText> editTexts;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        // Inflate people driven view
        view = inflater.inflate(R.layout.people_driven_layout, container, false);

        // Get views
        layout = (LinearLayout) view.findViewById(R.id.linearLayout);
        editText = (EditText) view.findViewById(R.id.editText);
        button = (Button) view.findViewById(R.id.button);

        // Create arraylists
        names = new ArrayList<String>();
        editTexts = new ArrayList<EditText>();

        button.setOnClickListener(onClick());
        final EditText editText = new EditText(this.getContext());
        editText.setHint("Name");

        Button submitButton = (Button) view.findViewById(R.id.submit_button_2);
        submitButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                send(v);
            }
        });

        return view;
    }

    private View.OnClickListener onClick() {
        return new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                // Add new editText
                final ViewGroup.LayoutParams lparams = new
                        ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,
                        ViewGroup.LayoutParams.WRAP_CONTENT);
                final EditText textView = new EditText(getContext());

                textView.setWidth(v.getWidth());
                textView.setHint("Name:");

                layout.addView(textView);
                editTexts.add(textView);
            }
        };
    }


    private void send(View view) {

        // Add names entered to list
        editTexts.add(editText);

        for( int i = 0; i < editTexts.size(); i++ ) {

            names.add(editTexts.get(i).getText().toString());

        }

        Intent sendToMapClass = new Intent(view.getContext(), MapsActivity.class);
        sendToMapClass.putExtra("names_array", names); //in other class need to grab the array list by doing
        //ArrayList<String> names = activityThatCalled.getExtras().getString("names_array");

        startActivity(sendToMapClass);
    }
}