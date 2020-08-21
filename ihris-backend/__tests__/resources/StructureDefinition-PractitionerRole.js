module.exports = {
  "resourceType" : "StructureDefinition",
  "id" : "PractitionerRole",
  "meta" : {
    "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
  },
  "text" : {
    "status" : "generated",
    "div" : "<div>!-- Snipped for Brevity --></div>"
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-category",
    "valueString" : "Base.Individuals"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
    "valueCode" : "trial-use"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
    "valueInteger" : 2
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-security-category",
    "valueCode" : "individual"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
    "valueCode" : "pa"
  }],
  "url" : "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
  "version" : "4.0.1",
  "name" : "PractitionerRole",
  "status" : "draft",
  "date" : "2019-11-01T09:29:23+11:00",
  "publisher" : "Health Level Seven International (Patient Administration)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "http://hl7.org/fhir"
    }]
  },
  {
    "telecom" : [{
      "system" : "url",
      "value" : "http://www.hl7.org/Special/committees/pafm/index.cfm"
    }]
  }],
  "description" : "A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.",
  "purpose" : "Need to track services that a healthcare provider is able to provide at an organization's location, and the services that they can perform there.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "PractitionerRole",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DomainResource",
  "derivation" : "specialization",
  "snapshot" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole",
      "short" : "Roles/organizations the practitioner is associated with",
      "definition" : "A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole",
        "min" : 0,
        "max" : "*"
      },
      "constraint" : [{
        "key" : "dom-2",
        "severity" : "error",
        "human" : "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
        "expression" : "contained.contained.empty()",
        "xpath" : "not(parent::f:contained and f:contained)",
        "source" : "http://hl7.org/fhir/StructureDefinition/DomainResource"
      },
      {
        "key" : "dom-3",
        "severity" : "error",
        "human" : "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
        "expression" : "contained.where((('#'+id in (%resource.descendants().reference | %resource.descendants().as(canonical) | %resource.descendants().as(uri) | %resource.descendants().as(url))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(canonical) = '#').exists()).not()).trace('unmatched', id).empty()",
        "xpath" : "not(exists(for $id in f:contained/*/f:id/@value return $contained[not(parent::*/descendant::f:reference/@value=concat('#', $contained/*/id/@value) or descendant::f:reference[@value='#'])]))",
        "source" : "http://hl7.org/fhir/StructureDefinition/DomainResource"
      },
      {
        "key" : "dom-4",
        "severity" : "error",
        "human" : "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
        "expression" : "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()",
        "xpath" : "not(exists(f:contained/*/f:meta/f:versionId)) and not(exists(f:contained/*/f:meta/f:lastUpdated))",
        "source" : "http://hl7.org/fhir/StructureDefinition/DomainResource"
      },
      {
        "key" : "dom-5",
        "severity" : "error",
        "human" : "If a resource is contained in another resource, it SHALL NOT have a security label",
        "expression" : "contained.meta.security.empty()",
        "xpath" : "not(exists(f:contained/*/f:meta/f:security))",
        "source" : "http://hl7.org/fhir/StructureDefinition/DomainResource"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
          "valueBoolean" : true
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
          "valueMarkdown" : "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time."
        }],
        "key" : "dom-6",
        "severity" : "warning",
        "human" : "A resource should have narrative for robust management",
        "expression" : "text.`div`.exists()",
        "xpath" : "exists(f:text/h:div)",
        "source" : "http://hl7.org/fhir/StructureDefinition/DomainResource"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "Entity. Role, or Act"
      },
      {
        "identity" : "v2",
        "map" : "PRD (as one example)"
      },
      {
        "identity" : "rim",
        "map" : "Role"
      },
      {
        "identity" : "servd",
        "map" : "ServiceSiteProvider"
      }]
    },
    {
      "id" : "PractitionerRole.id",
      "path" : "PractitionerRole.id",
      "short" : "Logical id of this artifact",
      "definition" : "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
      "comment" : "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Resource.id",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
          "valueUrl" : "string"
        }],
        "code" : "http://hl7.org/fhirpath/System.String"
      }],
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "PractitionerRole.meta",
      "path" : "PractitionerRole.meta",
      "short" : "Metadata about the resource",
      "definition" : "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Resource.meta",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Meta"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "PractitionerRole.implicitRules",
      "path" : "PractitionerRole.implicitRules",
      "short" : "A set of rules under which this content was created",
      "definition" : "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
      "comment" : "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Resource.implicitRules",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "uri"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : true,
      "isModifierReason" : "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
      "isSummary" : true
    },
    {
      "id" : "PractitionerRole.language",
      "path" : "PractitionerRole.language",
      "short" : "Language of the resource content",
      "definition" : "The base language in which the resource is written.",
      "comment" : "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Resource.language",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "code"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
          "valueCanonical" : "http://hl7.org/fhir/ValueSet/all-languages"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "Language"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
          "valueBoolean" : true
        }],
        "strength" : "preferred",
        "description" : "A human language.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/languages"
      }
    },
    {
      "id" : "PractitionerRole.text",
      "path" : "PractitionerRole.text",
      "short" : "Text summary of the resource, for human interpretation",
      "definition" : "A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
      "comment" : "Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a \"text blob\" or where text is additionally entered raw or narrated and encoded information is added later.",
      "alias" : ["narrative",
      "html",
      "xhtml",
      "display"],
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "DomainResource.text",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Narrative"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "Act.text?"
      }]
    },
    {
      "id" : "PractitionerRole.contained",
      "path" : "PractitionerRole.contained",
      "short" : "Contained, inline Resources",
      "definition" : "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
      "comment" : "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
      "alias" : ["inline resources",
      "anonymous resources",
      "contained resources"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "DomainResource.contained",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Resource"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "N/A"
      }]
    },
    {
      "id" : "PractitionerRole.extension",
      "path" : "PractitionerRole.extension",
      "short" : "Additional content defined by implementations",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "alias" : ["extensions",
      "user content"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "DomainResource.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "N/A"
      }]
    },
    {
      "id" : "PractitionerRole.modifierExtension",
      "path" : "PractitionerRole.modifierExtension",
      "short" : "Extensions that cannot be ignored",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      "alias" : ["extensions",
      "user content"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "DomainResource.modifierExtension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : true,
      "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them",
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "N/A"
      }]
    },
    {
      "id" : "PractitionerRole.identifier",
      "path" : "PractitionerRole.identifier",
      "short" : "Business Identifiers that are specific to a role/location",
      "definition" : "Business Identifiers that are specific to a role/location.",
      "requirements" : "Often, specific identities are assigned for the agent.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.identifier",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Identifier"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.identifier"
      },
      {
        "identity" : "v2",
        "map" : "PRD-7 (or XCN.1)"
      },
      {
        "identity" : "rim",
        "map" : ".id"
      },
      {
        "identity" : "servd",
        "map" : "./Identifiers"
      }]
    },
    {
      "id" : "PractitionerRole.active",
      "path" : "PractitionerRole.active",
      "short" : "Whether this practitioner role record is in active use",
      "definition" : "Whether this practitioner role record is in active use.",
      "comment" : "If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.",
      "requirements" : "Need to be able to mark a practitioner role record as not to be used because it was created in error, or otherwise no longer in active use.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.active",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "boolean"
      }],
      "meaningWhenMissing" : "This resource is generally assumed to be active if no value is provided for the active element",
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.status"
      },
      {
        "identity" : "v2",
        "map" : "STF-7"
      },
      {
        "identity" : "rim",
        "map" : ".statusCode"
      }]
    },
    {
      "id" : "PractitionerRole.period",
      "path" : "PractitionerRole.period",
      "short" : "The period during which the practitioner is authorized to perform in these role(s)",
      "definition" : "The period during which the person is authorized to act as a practitioner in these role(s) for the organization.",
      "requirements" : "Even after the agencies is revoked, the fact that it existed must still be recorded.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.period",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Period"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.done[x]"
      },
      {
        "identity" : "v2",
        "map" : "PRD-8/9 / PRA-5.4"
      },
      {
        "identity" : "rim",
        "map" : ".performance[@typeCode <= 'PPRF'].ActDefinitionOrEvent.effectiveTime"
      },
      {
        "identity" : "servd",
        "map" : "(ServD maps Practitioners and Organizations via another entity, so this concept is not available)"
      }]
    },
    {
      "id" : "PractitionerRole.practitioner",
      "path" : "PractitionerRole.practitioner",
      "short" : "Practitioner that is able to provide the defined services for the organization",
      "definition" : "Practitioner that is able to provide the defined services for the organization.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.practitioner",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Practitioner"]
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".player"
      }]
    },
    {
      "id" : "PractitionerRole.organization",
      "path" : "PractitionerRole.organization",
      "short" : "Organization where the roles are available",
      "definition" : "The organization where the Practitioner performs the roles associated.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.organization",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Organization"]
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".scoper"
      }]
    },
    {
      "id" : "PractitionerRole.code",
      "path" : "PractitionerRole.code",
      "short" : "Roles which this practitioner may perform",
      "definition" : "Roles which this practitioner is authorized to perform for the organization.",
      "comment" : "A person may have more than one role.",
      "requirements" : "Need to know what authority the practitioner has - what can they do?",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.code",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "PractitionerRole"
        }],
        "strength" : "example",
        "description" : "The role a person plays representing an organization.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/practitioner-role"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "PRD-1 / STF-18  / PRA-3  / PRT-4  / ROL-3 / ORC-12 / OBR-16 / PV1-7 / PV1-8 / PV1-9 / PV1-17"
      },
      {
        "identity" : "rim",
        "map" : ".code"
      },
      {
        "identity" : "servd",
        "map" : "(ServD maps Practitioners and Organizations via another entity, so this concept is not available)"
      }]
    },
    {
      "id" : "PractitionerRole.specialty",
      "path" : "PractitionerRole.specialty",
      "short" : "Specific specialty of the practitioner",
      "definition" : "Specific specialty of the practitioner.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.specialty",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "PractitionerSpecialty"
        }],
        "strength" : "preferred",
        "description" : "Specific specialty associated with the agency.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/c80-practice-codes"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "PRA-5"
      },
      {
        "identity" : "rim",
        "map" : ".player.HealthCareProvider[@classCode = 'PROV'].code"
      },
      {
        "identity" : "servd",
        "map" : "./Specialty"
      }]
    },
    {
      "id" : "PractitionerRole.location",
      "path" : "PractitionerRole.location",
      "short" : "The location(s) at which this practitioner provides care",
      "definition" : "The location(s) at which this practitioner provides care.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.location",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Location"]
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.where[x]"
      },
      {
        "identity" : "rim",
        "map" : ".performance.ActDefinitionOrEvent.ServiceDeliveryLocation[@classCode = 'SDLOC']"
      },
      {
        "identity" : "servd",
        "map" : "(ServD maps Practitioners and Organizations via another entity, so this concept is not available)<br/> However these are accessed via the Site.ServiceSite.ServiceSiteProvider record. (The Site has the location)"
      }]
    },
    {
      "id" : "PractitionerRole.healthcareService",
      "path" : "PractitionerRole.healthcareService",
      "short" : "The list of healthcare services that this worker provides for this role's Organization/Location(s)",
      "definition" : "The list of healthcare services that this worker provides for this role's Organization/Location(s).",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.healthcareService",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/HealthcareService"]
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "v2",
        "map" : "EDU-2 / AFF-3"
      },
      {
        "identity" : "rim",
        "map" : ".player.QualifiedEntity[@classCode = 'QUAL'].code"
      }]
    },
    {
      "id" : "PractitionerRole.telecom",
      "path" : "PractitionerRole.telecom",
      "short" : "Contact details that are specific to the role/location/service",
      "definition" : "Contact details that are specific to the role/location/service.",
      "requirements" : "Often practitioners have a dedicated line for each location (or service) that they work at, and need to be able to define separate contact details for each of these.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.telecom",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "ContactPoint"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".telecom"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime",
      "path" : "PractitionerRole.availableTime",
      "short" : "Times the Service Site is available",
      "definition" : "A collection of times the practitioner is available or performing this role at the location and/or healthcareservice.",
      "comment" : "More detailed availability information may be provided in associated Schedule/Slot resources.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.availableTime",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.id",
      "path" : "PractitionerRole.availableTime.id",
      "representation" : ["xmlAttr"],
      "short" : "Unique id for inter-element referencing",
      "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Element.id",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
          "valueUrl" : "string"
        }],
        "code" : "http://hl7.org/fhirpath/System.String"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.extension",
      "path" : "PractitionerRole.availableTime.extension",
      "short" : "Additional content defined by implementations",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "alias" : ["extensions",
      "user content"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Element.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.modifierExtension",
      "path" : "PractitionerRole.availableTime.modifierExtension",
      "short" : "Extensions that cannot be ignored even if unrecognized",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      "alias" : ["extensions",
      "user content",
      "modifiers"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "BackboneElement.modifierExtension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : true,
      "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : "N/A"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.daysOfWeek",
      "path" : "PractitionerRole.availableTime.daysOfWeek",
      "short" : "mon | tue | wed | thu | fri | sat | sun",
      "definition" : "Indicates which days of the week are available between the start and end Times.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.availableTime.daysOfWeek",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "code"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "DaysOfWeek"
        }],
        "strength" : "required",
        "description" : "The days of the week.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/days-of-week|4.0.1"
      },
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.allDay",
      "path" : "PractitionerRole.availableTime.allDay",
      "short" : "Always available? e.g. 24 hour service",
      "definition" : "Is this always available? (hence times are irrelevant) e.g. 24 hour service.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.availableTime.allDay",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "boolean"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.availableStartTime",
      "path" : "PractitionerRole.availableTime.availableStartTime",
      "short" : "Opening time of day (ignored if allDay = true)",
      "definition" : "The opening time of day. Note: If the AllDay flag is set, then this time is ignored.",
      "comment" : "The timezone is expected to be for where this HealthcareService is provided at.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.availableTime.availableStartTime",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "time"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.availableEndTime",
      "path" : "PractitionerRole.availableTime.availableEndTime",
      "short" : "Closing time of day (ignored if allDay = true)",
      "definition" : "The closing time of day. Note: If the AllDay flag is set, then this time is ignored.",
      "comment" : "The timezone is expected to be for where this HealthcareService is provided at.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.availableTime.availableEndTime",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "time"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable",
      "path" : "PractitionerRole.notAvailable",
      "short" : "Not available during this time due to provided reason",
      "definition" : "The practitioner is not available or performing this role during this period of time due to the provided reason.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.notAvailable",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "BackboneElement"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.id",
      "path" : "PractitionerRole.notAvailable.id",
      "representation" : ["xmlAttr"],
      "short" : "Unique id for inter-element referencing",
      "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Element.id",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
          "valueUrl" : "string"
        }],
        "code" : "http://hl7.org/fhirpath/System.String"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.extension",
      "path" : "PractitionerRole.notAvailable.extension",
      "short" : "Additional content defined by implementations",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "alias" : ["extensions",
      "user content"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Element.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.modifierExtension",
      "path" : "PractitionerRole.notAvailable.modifierExtension",
      "short" : "Extensions that cannot be ignored even if unrecognized",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      "alias" : ["extensions",
      "user content",
      "modifiers"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "BackboneElement.modifierExtension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : true,
      "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : "N/A"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.description",
      "path" : "PractitionerRole.notAvailable.description",
      "short" : "Reason presented to the user explaining why time not available",
      "definition" : "The reason that can be presented to the user as to why this time is not available.",
      "min" : 1,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.notAvailable.description",
        "min" : 1,
        "max" : "1"
      },
      "type" : [{
        "code" : "string"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.during",
      "path" : "PractitionerRole.notAvailable.during",
      "short" : "Service not available from this date",
      "definition" : "Service is not available (seasonally or for a public holiday) from this date.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.notAvailable.during",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Period"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availabilityExceptions",
      "path" : "PractitionerRole.availabilityExceptions",
      "short" : "Description of availability exceptions",
      "definition" : "A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "PractitionerRole.availabilityExceptions",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "string"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.endpoint",
      "path" : "PractitionerRole.endpoint",
      "short" : "Technical endpoints providing access to services operated for the practitioner with this role",
      "definition" : "Technical endpoints providing access to services operated for the practitioner with this role.",
      "requirements" : "Organizations have multiple systems that provide various services and ,ay also be different for practitioners too.\r\rSo the endpoint satisfies the need to be able to define the technical connection details for how to connect to them, and for what purpose.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "PractitionerRole.endpoint",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Endpoint"]
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    }]
  },
  "differential" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole",
      "short" : "Roles/organizations the practitioner is associated with",
      "definition" : "A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.",
      "min" : 0,
      "max" : "*",
      "mapping" : [{
        "identity" : "v2",
        "map" : "PRD (as one example)"
      },
      {
        "identity" : "rim",
        "map" : "Role"
      },
      {
        "identity" : "servd",
        "map" : "ServiceSiteProvider"
      }]
    },
    {
      "id" : "PractitionerRole.identifier",
      "path" : "PractitionerRole.identifier",
      "short" : "Business Identifiers that are specific to a role/location",
      "definition" : "Business Identifiers that are specific to a role/location.",
      "requirements" : "Often, specific identities are assigned for the agent.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Identifier"
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.identifier"
      },
      {
        "identity" : "v2",
        "map" : "PRD-7 (or XCN.1)"
      },
      {
        "identity" : "rim",
        "map" : ".id"
      },
      {
        "identity" : "servd",
        "map" : "./Identifiers"
      }]
    },
    {
      "id" : "PractitionerRole.active",
      "path" : "PractitionerRole.active",
      "short" : "Whether this practitioner role record is in active use",
      "definition" : "Whether this practitioner role record is in active use.",
      "comment" : "If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.",
      "requirements" : "Need to be able to mark a practitioner role record as not to be used because it was created in error, or otherwise no longer in active use.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "meaningWhenMissing" : "This resource is generally assumed to be active if no value is provided for the active element",
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.status"
      },
      {
        "identity" : "v2",
        "map" : "STF-7"
      },
      {
        "identity" : "rim",
        "map" : ".statusCode"
      }]
    },
    {
      "id" : "PractitionerRole.period",
      "path" : "PractitionerRole.period",
      "short" : "The period during which the practitioner is authorized to perform in these role(s)",
      "definition" : "The period during which the person is authorized to act as a practitioner in these role(s) for the organization.",
      "requirements" : "Even after the agencies is revoked, the fact that it existed must still be recorded.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Period"
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.done[x]"
      },
      {
        "identity" : "v2",
        "map" : "PRD-8/9 / PRA-5.4"
      },
      {
        "identity" : "rim",
        "map" : ".performance[@typeCode <= 'PPRF'].ActDefinitionOrEvent.effectiveTime"
      },
      {
        "identity" : "servd",
        "map" : "(ServD maps Practitioners and Organizations via another entity, so this concept is not available)"
      }]
    },
    {
      "id" : "PractitionerRole.practitioner",
      "path" : "PractitionerRole.practitioner",
      "short" : "Practitioner that is able to provide the defined services for the organization",
      "definition" : "Practitioner that is able to provide the defined services for the organization.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Practitioner"]
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".player"
      }]
    },
    {
      "id" : "PractitionerRole.organization",
      "path" : "PractitionerRole.organization",
      "short" : "Organization where the roles are available",
      "definition" : "The organization where the Practitioner performs the roles associated.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Organization"]
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".scoper"
      }]
    },
    {
      "id" : "PractitionerRole.code",
      "path" : "PractitionerRole.code",
      "short" : "Roles which this practitioner may perform",
      "definition" : "Roles which this practitioner is authorized to perform for the organization.",
      "comment" : "A person may have more than one role.",
      "requirements" : "Need to know what authority the practitioner has - what can they do?",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "PractitionerRole"
        }],
        "strength" : "example",
        "description" : "The role a person plays representing an organization.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/practitioner-role"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "PRD-1 / STF-18  / PRA-3  / PRT-4  / ROL-3 / ORC-12 / OBR-16 / PV1-7 / PV1-8 / PV1-9 / PV1-17"
      },
      {
        "identity" : "rim",
        "map" : ".code"
      },
      {
        "identity" : "servd",
        "map" : "(ServD maps Practitioners and Organizations via another entity, so this concept is not available)"
      }]
    },
    {
      "id" : "PractitionerRole.specialty",
      "path" : "PractitionerRole.specialty",
      "short" : "Specific specialty of the practitioner",
      "definition" : "Specific specialty of the practitioner.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "PractitionerSpecialty"
        }],
        "strength" : "preferred",
        "description" : "Specific specialty associated with the agency.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/c80-practice-codes"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "PRA-5"
      },
      {
        "identity" : "rim",
        "map" : ".player.HealthCareProvider[@classCode = 'PROV'].code"
      },
      {
        "identity" : "servd",
        "map" : "./Specialty"
      }]
    },
    {
      "id" : "PractitionerRole.location",
      "path" : "PractitionerRole.location",
      "short" : "The location(s) at which this practitioner provides care",
      "definition" : "The location(s) at which this practitioner provides care.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Location"]
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "w5",
        "map" : "FiveWs.where[x]"
      },
      {
        "identity" : "rim",
        "map" : ".performance.ActDefinitionOrEvent.ServiceDeliveryLocation[@classCode = 'SDLOC']"
      },
      {
        "identity" : "servd",
        "map" : "(ServD maps Practitioners and Organizations via another entity, so this concept is not available)<br/> However these are accessed via the Site.ServiceSite.ServiceSiteProvider record. (The Site has the location)"
      }]
    },
    {
      "id" : "PractitionerRole.healthcareService",
      "path" : "PractitionerRole.healthcareService",
      "short" : "The list of healthcare services that this worker provides for this role's Organization/Location(s)",
      "definition" : "The list of healthcare services that this worker provides for this role's Organization/Location(s).",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/HealthcareService"]
      }],
      "mapping" : [{
        "identity" : "v2",
        "map" : "EDU-2 / AFF-3"
      },
      {
        "identity" : "rim",
        "map" : ".player.QualifiedEntity[@classCode = 'QUAL'].code"
      }]
    },
    {
      "id" : "PractitionerRole.telecom",
      "path" : "PractitionerRole.telecom",
      "short" : "Contact details that are specific to the role/location/service",
      "definition" : "Contact details that are specific to the role/location/service.",
      "requirements" : "Often practitioners have a dedicated line for each location (or service) that they work at, and need to be able to define separate contact details for each of these.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "ContactPoint"
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "rim",
        "map" : ".telecom"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime",
      "path" : "PractitionerRole.availableTime",
      "short" : "Times the Service Site is available",
      "definition" : "A collection of times the practitioner is available or performing this role at the location and/or healthcareservice.",
      "comment" : "More detailed availability information may be provided in associated Schedule/Slot resources.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.daysOfWeek",
      "path" : "PractitionerRole.availableTime.daysOfWeek",
      "short" : "mon | tue | wed | thu | fri | sat | sun",
      "definition" : "Indicates which days of the week are available between the start and end Times.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "code"
      }],
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "DaysOfWeek"
        }],
        "strength" : "required",
        "description" : "The days of the week.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/days-of-week|4.0.1"
      },
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.allDay",
      "path" : "PractitionerRole.availableTime.allDay",
      "short" : "Always available? e.g. 24 hour service",
      "definition" : "Is this always available? (hence times are irrelevant) e.g. 24 hour service.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.availableStartTime",
      "path" : "PractitionerRole.availableTime.availableStartTime",
      "short" : "Opening time of day (ignored if allDay = true)",
      "definition" : "The opening time of day. Note: If the AllDay flag is set, then this time is ignored.",
      "comment" : "The timezone is expected to be for where this HealthcareService is provided at.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "time"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availableTime.availableEndTime",
      "path" : "PractitionerRole.availableTime.availableEndTime",
      "short" : "Closing time of day (ignored if allDay = true)",
      "definition" : "The closing time of day. Note: If the AllDay flag is set, then this time is ignored.",
      "comment" : "The timezone is expected to be for where this HealthcareService is provided at.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "time"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable",
      "path" : "PractitionerRole.notAvailable",
      "short" : "Not available during this time due to provided reason",
      "definition" : "The practitioner is not available or performing this role during this period of time due to the provided reason.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "BackboneElement"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.description",
      "path" : "PractitionerRole.notAvailable.description",
      "short" : "Reason presented to the user explaining why time not available",
      "definition" : "The reason that can be presented to the user as to why this time is not available.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "PractitionerRole.notAvailable.during",
      "path" : "PractitionerRole.notAvailable.during",
      "short" : "Service not available from this date",
      "definition" : "Service is not available (seasonally or for a public holiday) from this date.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Period"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.availabilityExceptions",
      "path" : "PractitionerRole.availabilityExceptions",
      "short" : "Description of availability exceptions",
      "definition" : "A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : ".effectiveTime"
      }]
    },
    {
      "id" : "PractitionerRole.endpoint",
      "path" : "PractitionerRole.endpoint",
      "short" : "Technical endpoints providing access to services operated for the practitioner with this role",
      "definition" : "Technical endpoints providing access to services operated for the practitioner with this role.",
      "requirements" : "Organizations have multiple systems that provide various services and ,ay also be different for practitioners too.\r\rSo the endpoint satisfies the need to be able to define the technical connection details for how to connect to them, and for what purpose.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Endpoint"]
      }],
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    }]
  }
}
