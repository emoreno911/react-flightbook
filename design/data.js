var flights = [
    {
        currency: "EUR",
        price: 128.67,
        carrier: "KL",
        time: "2h 30min",
        nodes: ["CDG 2017-05-30T09:35+02:00 AMS 2017-05-30T11:15+02:00"]
    },
    {
        currency: "EUR",
        price: 138.70,
        carrier: "AF",
        time: "2h 30min",
        nodes: ["CDG 2017-05-30T12:35+02:00 AMS 2017-05-30T13:50+02:00"]
    },
    {
        currency: "EUR",
        price: 151.41,
        carrier: "BA",
        time: "2h 30min",
        nodes: ["CDG 2017-05-30T11:40+02:00 AMS 2017-05-30T12:55+02:00"]
    },
    {
        currency: "EUR",
        price: 174.70,
        carrier: "KL",
        time: "2h 30min",
        nodes: ["CDG 2017-05-30T18:35+02:00 AMS 2017-05-30T19:50+02:00"]
    },
    {
        currency: "EUR",
        price: 204.70,
        carrier: "AF",
        time: "2h 30min",
        nodes: ["CDG 2017-05-30T11:40+02:00 AMS 2017-05-30T12:55+02:00"]
    }
];

var carrier = {
    "AF": "Air France",
    "KL": "KLM Royal Dutch Airlines",
    "BA": "British Airways"
};

var airports = [{"name":"Vichy-Charmeil Airport","city":"Vichy","country":"France","IATA":"VHY"},{"name":"Lyon-Bron Airport","city":"Lyon","country":"France","IATA":"LYN"},{"name":"Cannes-Mandelieu Airport","city":"Cannes","country":"France","IATA":"CEQ"},{"name":"Marseille Provence Airport","city":"Marseille","country":"France","IATA":"MRS"},{"name":"Charles de Gaulle International","city":"Paris","country":"France","IATA":"CDG"},{"name":"Toussus-le-Noble Airport","city":"Toussous-le-noble","country":"France","IATA":"TNF"},{"name":"Paris-Orly Airport","city":"Paris","country":"France","IATA":"ORY"},{"name":"Le Mans-Arnage Airport","city":"Le Mans","country":"France","IATA":"LME"},{"name":"Nantes Atlantique Airport","city":"Nantes","country":"France","IATA":"NTE"},{"name":"Nancy-Essey Airport","city":"Nancy","country":"France","IATA":"ENC"},{"name":"Frankfurt am Main International","city":"Frankfurt","country":"Germany","IATA":"FRA"},{"name":"Hamburg Airport","city":"Hamburg","country":"Germany","IATA":"HAM"},{"name":"Cologne Bonn Airport","city":"Cologne","country":"Germany","IATA":"CGN"},{"name":"Munich International Airport","city":"Munich","country":"Germany","IATA":"MUC"},{"name":"Stuttgart Airport","city":"Stuttgart","country":"Germany","IATA":"STR"},{"name":"Berlin-Tegel International Airport","city":"Berlin","country":"Germany","IATA":"TXL"},{"name":"Hannover Airport","city":"Hannover","country":"Germany","IATA":"HAJ"},{"name":"Bremen Airport","city":"Bremen","country":"Germany","IATA":"BRE"},{"name":"Frankfurt-Hahn Airport","city":"Hahn","country":"Germany","IATA":"HHN"},{"name":"Dortmund Airport","city":"Dortmund","country":"Germany","IATA":"DTM"},{"name":"Cork Airport","city":"Cork","country":"Ireland","IATA":"ORK"},{"name":"Galway Airport","city":"Galway","country":"Ireland","IATA":"GWY"},{"name":"Dublin Airport","city":"Dublin","country":"Ireland","IATA":"DUB"},{"name":"Waterford Airport","city":"Waterford","country":"Ireland","IATA":"WAT"},{"name":"Amsterdam Airport Schiphol","city":"Amsterdam","country":"Netherlands","IATA":"AMS"},{"name":"Maastricht Aachen Airport","city":"Maastricht","country":"Netherlands","IATA":"MST"},{"name":"Eindhoven Airport","city":"Eindhoven","country":"Netherlands","IATA":"EIN"},{"name":"Rotterdam The Hague Airport","city":"Rotterdam","country":"Netherlands","IATA":"RTM"},{"name":"Belfast International Airport","city":"Belfast","country":"United Kingdom","IATA":"BFS"},{"name":"Manchester Airport","city":"Manchester","country":"United Kingdom","IATA":"MAN"},{"name":"Southampton Airport","city":"Southampton","country":"United Kingdom","IATA":"SOU"},{"name":"London Heathrow Airport","city":"London","country":"United Kingdom","IATA":"LHR"},{"name":"Blackpool International Airport","city":"Blackpool","country":"United Kingdom","IATA":"BLK"},{"name":"Newcastle Airport","city":"Newcastle","country":"United Kingdom","IATA":"NCL"},{"name":"London Stansted Airport","city":"London","country":"United Kingdom","IATA":"STN"},{"name":"Miami International Airport","city":"Miami","country":"United States","IATA":"MIA"},{"name":"John F Kennedy International Airport","city":"New York","country":"United States","IATA":"JFK"},{"name":"Piedmont Triad International Airport","city":"Greensboro","country":"United States","IATA":"GSO"},{"name":"Wings Field","city":"Philadelphia","country":"United States","IATA":"BBX"},{"name":"Hardwick Field","city":"Cleveland","country":"United States","IATA":"HDI"},{"name":"Warren Field","city":"Washington","country":"United States","IATA":"OCW"}];

