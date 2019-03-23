package com.dao;

import com.pojo.Crew;

import java.util.List;

public interface CrewDao {
    int addCrew(Crew crew);

    int deleteCrewByCallsign(int callsign);

    int updateCrew(Crew crew);

    Crew queryByCallsign(int callsign);

    List<Crew> queryAllCrew();
}
