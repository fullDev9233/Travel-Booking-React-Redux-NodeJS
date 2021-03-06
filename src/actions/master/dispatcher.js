export function upsalesDispatcher(status, actionType) {
  return {
    type: actionType,
    payload: {
      passengers: status().passengersMasterReducer,
      bagAllowance: status().getBagsReducer,
      boughtBags: status().purchasedBagsReducer,
      boughtInsurances: status().purchasedInsuranceReducer,
      insuranceOptions: status().airInsuranceReducer,
      mealOptions: status().getMealsReducer,
      boughtMeals: status().purchasedMealsReducer,
      currency: status().currentCurrencyReducer,
      hasFlexibleTicket: status().hasFlexibleTicketReducer,
      flexibleTicket: status().flexibleTicketReducer,
      overallFlexTicketCost: status().getFlexibleTicketFinalCostReducer,
      hasWebCheckin: status().hasWebCheckinReducer,
      webCheckinPrice: status().webCheckinPriceReducer,
      hasBlueRibbon: status().hasBlueRibbonReducer,
      blueRibbonPrices: status().getBlueRibbonReducer,
      cabinSelection: status().fetchCabinPaxPerSegmentReducer,
      segmentCabinPricing: status().getLegsReducer,
      selectedSeats: status().fetchSeatSelectionReducer,
      seatPrices: status().seatMapInfoReducer,
      parkingPrices: status().getParkPricingReducer,
      parkingDays: status().getParkingDaysReducer,
      hasFastTrack: status().hasFastTrackReducer,
      hasAirHelp: status().hasAirHelpReducer,
      fastTrackPricing: status().fastTrackPriceReducer,
      overallWebCheckinCost: status().getWebCheckinFinalCostReducer,
      overallFastTrackCost: status().getFastTrackFinalCostReducer,
      overallPricingCost: status().getParkPricingFinalCostReducer,
      overallBlueRibbonCost: status().getBlueRibbonFinalCostReducer,
      overallAirHelpCost: status().getPurchasedCostAirHelpReducer,
      airHelpPricingMdl: status().airHelpPricingModelReducer,
      fastTrackPricingMdl: status().fastTrackPricingModelReducer,
      flexTicketPricingMdl: status().flexibleTicketPricingModelReducer,
      BlueRibbonPricingMdl: status().BlueRibbonPricingModelReducer,
      WebCheckinPricingMdl: status().WebCheckinModelReducer,
    },
  };
}
