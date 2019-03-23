package com.pojo;

import java.text.SimpleDateFormat;
import java.sql.Time;
import java.sql.Date;

public class CrewStatistics {
    private int callsign;
    private int reportID;
    private String flightNumber;
    private String departure;
    private String arrival;
    private String aircraft;
    private String registerNumber;
    private Time flightTime;
    private int flightScore;
    private int FOQA;
    private int operationScore;
    private Date submitTime;
    private int status;
    private int landingRate;
    private double overload;
    private int punctualityRate;
    private double fuel;
    private int fuelPrice;
    private double fuelConsume;
    private int stowage;
    private int distance;
    private double price;
    private double profit;

    public int getCallsign() {
        return callsign;
    }

    public void setCallsign(int callsign) {
        this.callsign = callsign;
    }

    public int getReportID() {
        return reportID;
    }

    public void setReportID(int reportID) {
        this.reportID = reportID;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public String getAircraft() {
        return aircraft;
    }

    public void setAircraft(String aircraft) {
        this.aircraft = aircraft;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }

    public Time getFlightTime() {
        return flightTime;
    }

    public void setFlightTime(Time flightTime) {
        this.flightTime = flightTime;
    }

    public int getFlightScore() {
        return flightScore;
    }

    public void setFlightScore(int flightScore) {
        this.flightScore = flightScore;
    }

    public int getFOQA() {
        return FOQA;
    }

    public void setFOQA(int FOQA) {
        this.FOQA = FOQA;
    }

    public int getOperationScore() {
        return operationScore;
    }

    public void setOperationScore(int operationScore) {
        this.operationScore = operationScore;
    }

    public Date getSubmitTime() {
        return submitTime;
    }

    public void setSubmitTime(Date submitTime) {
        this.submitTime = submitTime;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getLandingRate() {
        return landingRate;
    }

    public void setLandingRate(int landingRate) {
        this.landingRate = landingRate;
    }

    public double getOverload() {
        return overload;
    }

    public void setOverload(double overload) {
        this.overload = overload;
    }

    public int getPunctualityRate() {
        return punctualityRate;
    }

    public void setPunctualityRate(int punctualityRate) {
        this.punctualityRate = punctualityRate;
    }

    public double getFuel() {
        return fuel;
    }

    public void setFuel(double fuel) {
        this.fuel = fuel;
    }

    public int getFuelPrice() {
        return fuelPrice;
    }

    public void setFuelPrice(int fuelPrice) {
        this.fuelPrice = fuelPrice;
    }

    public double getFuelConsume() {
        return fuelConsume;
    }

    public void setFuelConsume(double fuelConsume) {
        this.fuelConsume = fuelConsume;
    }

    public int getStowage() {
        return stowage;
    }

    public void setStowage(int stowage) {
        this.stowage = stowage;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getProfit() {
        return profit;
    }

    public void setProfit(double profit) {
        this.profit = profit;
    }
}
