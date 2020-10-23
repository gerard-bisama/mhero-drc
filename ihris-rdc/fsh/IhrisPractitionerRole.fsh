Profile:        IhrisPractitionerRole
Parent:         PractitionerRole
Id:             ihris-practitioner-role
Title:          "iHRIS Practitioner Role"
Description:    "iHRIS profile of Practitioner Role."

* identifier 0..* MS
* identifier ^label = "Identifier"
* identifier.use MS
* identifier.use ^label = "Use"
* identifier.type MS
* identifier.type ^label = "Type"
* identifier.type.coding 1..1 MS
* identifier.system MS
* identifier.system ^label = "System"
* identifier.value MS
* identifier.value ^label = "Value"
* active 1..1 MS
* active ^label = "Active"
* period 1..1 MS
* period ^label = "Period of Employment"
* period.start 1..1 MS
* period.start ^label = "Start Date"
* period.start ^minValueDateTime = "1950-01-01"
* period.start ^maxValueDateTime = "2030-01-01"
* period.end 0..1 MS
* period.end ^label = "End Date"
* period.end ^minValueDateTime = "1950-01-01"
* period.end ^maxValueDateTime = "2030-01-01"
* practitioner 0..1 MS
* practitioner ^label = "Health Worker"
* code 1..1 MS
* code ^label = "Catégories"
* code from http://ihris.org/fhir/ValueSet/ihris-cadre-rdc
* code.coding 1..1 MS
* specialty 0..* MS
* specialty ^label = "Specialty"
* location 1..1 MS
* location ^label = "Facility"
* extension contains 
    IhrisPractitionerRoleJob named fonction 0..1 MS
* extension[fonction].valueCoding MS
* extension[fonction] ^label = "Fonction"


Extension:      IhrisPractitionerRoleJob
Id:             ihris-practitionerrole-job
Title:          "iHRIS PractitionerRole JobTitle"
Description:    "iHRIS extension for PractitionerRole Job."
* ^context.type = #element
* ^context.expression = "PractitionerRole"
//* ^context.expression = "Position"
* value[x] only Coding
* valueCoding 1..1 MS
* valueCoding ^label = "Fonction"
* valueCoding from http://hl7.org/fhir/ValueSet/ihris-job-rdc