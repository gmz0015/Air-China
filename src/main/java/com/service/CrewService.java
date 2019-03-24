package com.service;

import com.pojo.Crew;

import java.util.List;

public interface CrewService {
    int addCrew(Crew crew);

    int deleteCrewByCallsign(int callsign);

    int updateCrew(Crew crew);

    Crew queryByCallsign(int callsign);

    List<Crew> queryAllCrew();

    Crew authentication(String callsign);
}
