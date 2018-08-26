import { Injectable } from '@angular/core';
@Injectable()
export class dummy{
  getJsonData()
  {
      return [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]};
getArray(){
	return [
	{"Name": "Alfonso", "Phone": "(01745) 545182", "abc": "10","CreatedDate":"01/01/2000"},
	{"Name": "Lars", "Phone": "0845 46 49", "abc": "4","CreatedDate":"01/05/2000"},
	{"Name": "David", "Phone": "076 5311 6696", "abc": "6","CreatedDate":"01/01/2008"},
	{"Name": "Abel", "Phone": "(0114) 996 1979", "abc": "6","CreatedDate":"11/01/2000"},
	{"Name": "Octavius", "Phone": "0800 922 0845", "abc": "3","CreatedDate":"01/01/1998"},
	{"Name": "Michael", "Phone": "0845 46 43", "abc": "10","CreatedDate":"01/10/2000"},
	{"Name": "Cole", "Phone": "(024) 2984 4176", "abc": "1"},
	{"Name": "Clark", "Phone": "0928 416 1117", "abc": "8"},
	{"Name": "Denton", "Phone": "055 0654 4461", "abc": "2"},
	{"Name": "Tucker", "Phone": "(01908) 88720", "abc": "3"},
	{"Name": "Eaton", "Phone": "076 5587 8770", "abc": "6"},
	{"Name": "Honorato", "Phone": "0905 300 0991", "abc": "7"},
	{"Name": "Lewis", "Phone": "(01139) 231841", "abc": "6"},
	{"Name": "Quamar", "Phone": "(01021) 599135", "abc": "4"},
	{"Name": "Ethan", "Phone": "(0113) 941 1919", "abc": "7"},
	{"Name": "Upton", "Phone": "07388 725886", "abc": "5"},
	{"Name": "Chancellor", "Phone": "076 4952 7415", "abc": "7"},
	{"Name": "Odysseus", "Phone": "(013198) 68933", "abc": "3"},
	{"Name": "Forrest", "Phone": "0800 638768", "abc": "7"},
	{"Name": "Duncan", "Phone": "(01741) 18682", "abc": "5"},
	{"Name": "Reed", "Phone": "055 2688 8750", "abc": "4"},
	{"Name": "Jarrod", "Phone": "(016977) 6515", "abc": "1"},
	{"Name": "Xenos", "Phone": "(01803) 87733", "abc": "2"},
	{"Name": "Plato", "Phone": "055 5166 5862", "abc": "2"},
	{"Name": "Barclay", "Phone": "0500 831518", "abc": "1"},
	{"Name": "Elijah", "Phone": "0811 095 3495", "abc": "10"},
	{"Name": "Talon", "Phone": "0800 926864", "abc": "1"},
	{"Name": "Harrison", "Phone": "(0118) 425 6163", "abc": "9"},
	{"Name": "Xanthus", "Phone": "0315 241 9398", "abc": "1"},
	{"Name": "Tarik", "Phone": "(0111) 484 7703", "abc": "6"},
	{"Name": "Hammett", "Phone": "0845 293 1025", "abc": "9"},
	{"Name": "Walter", "Phone": "0800 1111", "abc": "10"},
	{"Name": "Jerome", "Phone": "(01926) 08040", "abc": "8"},
	{"Name": "Callum", "Phone": "(016977) 6552", "abc": "10"},
	{"Name": "Branden", "Phone": "076 7273 2886", "abc": "3"},
	{"Name": "Oren", "Phone": "07624 098792", "abc": "10"},
	{"Name": "Troy", "Phone": "0800 045 5594", "abc": "8"},
	{"Name": "Rahim", "Phone": "055 5106 1991", "abc": "3"},
	{"Name": "Isaiah", "Phone": "(0151) 302 0942", "abc": "3"},
	{"Name": "Dexter", "Phone": "(01590) 01430", "abc": "7"},
	{"Name": "Caesar", "Phone": "07624 299518", "abc": "1"},
	{"Name": "Dolan", "Phone": "070 5554 8420", "abc": "7"},
	{"Name": "Cairo", "Phone": "(0118) 270 6465", "abc": "8"},
	{"Name": "Camden", "Phone": "0500 211073", "abc": "10"},
	{"Name": "Craig", "Phone": "(01305) 09127", "abc": "3"},
	{"Name": "Dillon", "Phone": "07624 031513", "abc": "2"},
	{"Name": "Dominic", "Phone": "0919 005 7521", "abc": "7"},
	{"Name": "Jacob", "Phone": "056 0879 8215", "abc": "1"},
	{"Name": "Cody", "Phone": "(01762) 380011", "abc": "4"},
	{"Name": "Uriel", "Phone": "055 1643 8948", "abc": "6"},
	{"Name": "Joshua", "Phone": "0800 1111", "abc": "3"},
	{"Name": "Bernard", "Phone": "0500 623037", "abc": "8"},
	{"Name": "Harding", "Phone": "(016977) 1751", "abc": "3"},
	{"Name": "Jacob", "Phone": "0500 511987", "abc": "7"},
	{"Name": "Noah", "Phone": "0964 994 3214", "abc": "1"},
	{"Name": "Xander", "Phone": "070 7826 7272", "abc": "1"},
	{"Name": "Nigel", "Phone": "(0118) 642 1094", "abc": "9"},
	{"Name": "Graham", "Phone": "(016977) 8035", "abc": "10"},
	{"Name": "Jin", "Phone": "0845 46 43", "abc": "5"},
	{"Name": "Philip", "Phone": "(015823) 42587", "abc": "9"},
	{"Name": "Ferdinand", "Phone": "0800 503257", "abc": "8"},
	{"Name": "Shad", "Phone": "(020) 2023 5308", "abc": "10"},
	{"Name": "Brent", "Phone": "056 9307 7424", "abc": "10"},
	{"Name": "Henry", "Phone": "0845 46 45", "abc": "1"},
	{"Name": "Jamal", "Phone": "(01831) 38138", "abc": "2"},
	{"Name": "Troy", "Phone": "07624 719162", "abc": "8"},
	{"Name": "Alexander", "Phone": "055 1989 9258", "abc": "2"},
	{"Name": "Adrian", "Phone": "(016977) 5063", "abc": "4"},
	{"Name": "Felix", "Phone": "0845 46 46", "abc": "3"},
	{"Name": "Brian", "Phone": "(016061) 67538", "abc": "8"},
	{"Name": "Joseph", "Phone": "076 8015 6000", "abc": "3"},
	{"Name": "Clark", "Phone": "0919 054 0902", "abc": "10"},
	{"Name": "Jelani", "Phone": "070 1042 0363", "abc": "8"},
	{"Name": "Slade", "Phone": "0967 821 9257", "abc": "3"},
	{"Name": "Jin", "Phone": "0952 994 4476", "abc": "10"},
	{"Name": "Lionel", "Phone": "070 4576 6147", "abc": "3"},
	{"Name": "Jerome", "Phone": "07624 602133", "abc": "6"},
	{"Name": "Gary", "Phone": "0800 527 1541", "abc": "3"},
	{"Name": "Josiah", "Phone": "(010169) 13506", "abc": "1"},
	{"Name": "Malcolm", "Phone": "0500 849070", "abc": "5"},
	{"Name": "Patrick", "Phone": "(017544) 07832", "abc": "7"},
	{"Name": "Daniel", "Phone": "(011475) 27466", "abc": "10"},
	{"Name": "John", "Phone": "(019386) 71116", "abc": "1"},
	{"Name": "Ulric", "Phone": "070 4609 0926", "abc": "4"},
	{"Name": "Jonah", "Phone": "(01835) 93795", "abc": "5"},
	{"Name": "Blaze", "Phone": "(015582) 98338", "abc": "5"},
	{"Name": "Nathaniel", "Phone": "0909 021 5095", "abc": "4"},
	{"Name": "Jack", "Phone": "055 1214 4623", "abc": "5"},
	{"Name": "Myles", "Phone": "0845 46 45", "abc": "1"},
	{"Name": "Reed", "Phone": "(018074) 33403", "abc": "5"},
	{"Name": "Herman", "Phone": "(0117) 413 8754", "abc": "9"},
	{"Name": "Chase", "Phone": "055 2168 3902", "abc": "6"},
	{"Name": "Erich", "Phone": "(0161) 442 3951", "abc": "6"},
	{"Name": "Edward", "Phone": "(026) 0852 1267", "abc": "9"},
	{"Name": "Asher", "Phone": "07546 133704", "abc": "1"},
	{"Name": "Cole", "Phone": "(01276) 41485", "abc": "10"},
	{"Name": "Rahim", "Phone": "(01879) 410461", "abc": "2"},
	{"Name": "Wayne", "Phone": "(016977) 8503", "abc": "2"},
	{"Name": "Paki", "Phone": "0814 080 9194", "abc": "10"},
	{"Name": "Arden", "Phone": "0500 090650", "abc": "1"}
];
}

}