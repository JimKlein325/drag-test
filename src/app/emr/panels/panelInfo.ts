export class PanelInfo {
    problemTitle: string="Problems";
    problemHeaders: string[]=["Problem", "Date", "Status"];

    medicationsTitle: string="Medications";
    medicationsHeaders: string[]=["Medication", "Instructions", "Dosage", "Effective Dates (start - stop)", "Status"];

    functionalAndCStatusTitle: string="Functional and cognitive status";
    functionalAndCStatusHeaders: string[]=["Assessment", "Date", "Results", "Comments"];

    allergiesTitle: string="Allergies, adverse reactions and alerts";
    allergiesHeaders: string[]=["Allergen", "Reaction", "Reaction Severity",  "Documentation Date",  "Start Date" ];
 
    immunizationsTitle: string="Immunizations";
    immunizationsHeaders: string[]=["Vaccine", "Lot Number", "Date", "Status"];

    socialHistoryTitle: string="Social history";
    socialHistoryHeaders: string[]=["Smoking Status"];

    vitalSignsTitle: string="Vital signs";
    vitalSignsHeaders: string[]=["Date", "Test", "Result", "Details"];

    resultsTitle: string="Results";
    resultsHeaders: string[]=["Result", "Value", "Units", "Range", "Date", "Interpretation"];

    plandOfCareTitle: string="Plan of care";
    plandOfCareHeaders: string[]=["Date/time", "Goal", "Instructions"];
    plandOfCareTitle2: string="Planned Encounters";
    plandOfCareHeaders2: string[]=["Name", "Date", "Details"];

    encountersTitle: string="Encounters";
    encountersHeaders: string[]=["Encounter", "Performer", "Location", "Encounter date", "Diagnosis", "Diagnosis Status"];

    reasonForRefferalTitle: string="Reason for referral";
    reasonForRefferalHeaders: string[]=[];

    proceduresTitle: string="Procedures";
    proceduresHeaders: string[]=[];

/*
    Title: string="";
    Headers: string[]=[];

*/    
    
}