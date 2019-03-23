package com.function;

import com.pojo.CrewStatistics;
import net.sf.json.JSONObject;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class CalculateCrewStatistics {
    /* Format */
    private DateFormat DurationFormat = new SimpleDateFormat("hh:mm:ss");

    private int callsign;

    /* Total statistics */
    private float totalFlight;
    private Date totalDuration;

    /* Flight */
    private int validFlight;
    private int invalidFlight;
    private float validRate;

    /* Duration */
    private Date maxDuration;
    private Date minDuration;
    private Date averageDuration;

    /*  */

    public CalculateCrewStatistics() {
        /* Total statistics */
        totalFlight = 0;
        totalDuration = new Date();

        /* Flight */
        validFlight = 0;
        invalidFlight = 0;
        validRate = 0;

        /* Duration */
        maxDuration = new Date();
        minDuration = new Date();
        averageDuration = new Date();
    }

    public void setData(List<CrewStatistics> crewStatisticsList, int callsign){
        this.callsign = callsign;
        int i=0;

        /* Time */
        long TempTime = 0;
        long TempMaxDuration = 0;
        long TempMinDuration = 10000000;
        for (CrewStatistics crewStatistics : crewStatisticsList) {
            totalFlight++;
            TempTime += crewStatistics.getFlightTime().getTime();

            /* Flight */
            if (crewStatistics.getStatus() == 1)
                validFlight++;
            else
                invalidFlight++;

            /* Duration */
            TempMaxDuration = (crewStatistics.getFlightTime().getTime()>TempMaxDuration)?crewStatistics.getFlightTime().getTime():TempMaxDuration;
            TempMinDuration = (crewStatistics.getFlightTime().getTime()<TempMinDuration)?crewStatistics.getFlightTime().getTime():TempMinDuration;

        }


        try {
            /* Flight */
            validRate = validFlight / totalFlight;

            /* Format time to hh:mm:ss */
            totalDuration = DurationFormat.parse(DurationFormat.format(new Date(TempTime - 60*60*1000)));
            maxDuration = DurationFormat.parse(DurationFormat.format(new Date(TempMaxDuration - 60*60*1000))); // extra 1hour
            minDuration = DurationFormat.parse(DurationFormat.format(new Date(TempMinDuration  - 60*60*1000)));
            averageDuration =  DurationFormat.parse(DurationFormat.format(new Date((int) ((TempTime- 60*60*1000) / totalFlight))));
        }
        catch (ParseException e){
            System.out.println("Catch a Exception: " + e);
        }
    }

    public JSONObject getData() {
        JSONObject jsonObject = new JSONObject();

        /* Total statistics */
        jsonObject.put("totalFlight", totalFlight);
        jsonObject.put("totalDuration", DurationFormat.format(totalDuration));

        /* Flight */
        jsonObject.put("validFlight", validFlight);
        jsonObject.put("invalidFlight", invalidFlight);
        jsonObject.put("validRate", validRate);

        /* Duration */
        jsonObject.put("maxDuration", DurationFormat.format(maxDuration));
        jsonObject.put("minDuration", DurationFormat.format(minDuration));
        jsonObject.put("averageDuration", DurationFormat.format(averageDuration));

        return jsonObject;
    }
}
