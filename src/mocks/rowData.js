const queryZero = [
  { id: '100', firstName: 'Amelia', lastName: 'Behre', age: '18', profession: 'police officer', city: 'Cayenne' },
  { id: '101', firstName: 'Beverley', lastName: 'Fadiman', age: '38', profession: 'police officer', city: 'Vilnius' },
  { id: '102', firstName: 'Althea', lastName: 'Mullane', age: '25', profession: 'firefighter', city: 'Pago Pago' },
  { id: '103', firstName: 'Carolina', lastName: 'Gladstone', age: '91', profession: 'police officer', city: 'Iqaluit' },
  { id: '104', firstName: 'Marylou', lastName: 'Candy', age: '13', profession: 'developer', city: 'Norilsk' },
  { id: '105', firstName: 'Carree', lastName: 'Shuler', age: '26', profession: 'doctor', city: 'Ljubljana' },
  { id: '106', firstName: 'Wileen', lastName: 'Auberbach', age: '57', profession: 'doctor', city: 'İzmir' },
  { id: '107', firstName: 'Jennica', lastName: 'Scammon', age: '59', profession: 'developer', city: 'Yokohama' },
  { id: '108', firstName: 'Zaria', lastName: 'Auberbach', age: '47', profession: 'developer', city: 'Yellowknife' },
  { id: '109', firstName: 'Bill', lastName: 'Alcott', age: '94', profession: 'developer', city: 'Bergen' },
  { id: '110', firstName: 'Wilma', lastName: 'Pauly', age: '12', profession: 'worker', city: 'Baku' },
  { id: '111', firstName: 'Valera', lastName: 'Uund', age: '78', profession: 'police officer', city: 'Minneapolis' },
  { id: '112', firstName: 'Aubrie', lastName: 'Evvie', age: '88', profession: 'firefighter', city: 'Nukus' },
  { id: '113', firstName: 'Jean', lastName: 'Maples', age: '88', profession: 'firefighter', city: 'Cork (city)' },
  { id: '114', firstName: 'Rani', lastName: 'Christal', age: '29', profession: 'developer', city: 'Lisbon' },
  { id: '115', firstName: 'Dode', lastName: 'Cath', age: '21', profession: 'firefighter', city: 'Buffalo' },
  { id: '116', firstName: 'Gale', lastName: 'Germann', age: '39', profession: 'firefighter', city: 'Mata-Utu' },
  { id: '117', firstName: 'Zaria', lastName: 'Saunderson', age: '29', profession: 'worker', city: 'Vitória' },
  { id: '118', firstName: 'Max', lastName: 'Durante', age: '56', profession: 'firefighter', city: 'Sacramento' },
  { id: '119', firstName: 'Celene', lastName: 'Zetta', age: '8', profession: 'doctor', city: 'Fort-de-France' },
  { id: '120', firstName: 'Jaime', lastName: 'Malanie', age: '67', profession: 'worker', city: 'Asmara' },
  { id: '121', firstName: 'Riannon', lastName: 'Germann', age: '59', profession: 'developer', city: 'Hamburg' },
  { id: '122', firstName: 'Larine', lastName: 'Fredi', age: '29', profession: 'police officer', city: 'Manama' },
  { id: '123', firstName: 'Ericka', lastName: 'Bollay', age: '19', profession: 'police officer', city: 'Salzburg' },
  { id: '124', firstName: 'Margalo', lastName: 'Earlie', age: '66', profession: 'doctor', city: 'Los Angeles' },
  { id: '125', firstName: 'Suzette', lastName: 'Ummersen', age: '97', profession: 'doctor', city: 'Monaco' },
  { id: '126', firstName: 'Robinia', lastName: 'Susannah', age: '24', profession: 'worker', city: 'Patna' },
  { id: '127', firstName: 'Sibella', lastName: 'Hourigan', age: '14', profession: 'firefighter', city: 'Santiago de Cuba' },
  { id: '128', firstName: 'Fredericka', lastName: 'Casimir', age: '60', profession: 'worker', city: 'Taichung' },
  { id: '129', firstName: 'Selma', lastName: 'Kosey', age: '52', profession: 'worker', city: 'Bilbao' },
  { id: '130', firstName: 'Leanna', lastName: 'Rogerio', age: '91', profession: 'developer', city: 'Saskatoon' },
  { id: '131', firstName: 'Hayley', lastName: 'Noelyn', age: '44', profession: 'police officer', city: 'Hargeisa' },
  { id: '132', firstName: 'Hyacinthe', lastName: 'Santoro', age: '17', profession: 'worker', city: 'Cebu City' },
  { id: '133', firstName: 'Gale', lastName: 'Kaete', age: '61', profession: 'developer', city: 'Zhengzhou' },
  { id: '134', firstName: 'Viviene', lastName: 'Kristi', age: '89', profession: 'worker', city: 'Kinshasa' },
  { id: '135', firstName: 'Rhoda', lastName: 'Phaidra', age: '80', profession: 'police officer', city: 'Majuro' },
  { id: '136', firstName: 'Carmela', lastName: 'Erminia', age: '36', profession: 'police officer', city: 'Konya' },
  { id: '137', firstName: 'Kristan', lastName: 'Adamsen', age: '12', profession: 'developer', city: 'Saint Petersburg' },
  { id: '138', firstName: 'Eugine', lastName: 'Berl', age: '71', profession: 'doctor', city: 'Suez' },
  { id: '139', firstName: 'Ursulina', lastName: 'Levey', age: '66', profession: 'firefighter', city: 'Düsseldorf' },
  { id: '140', firstName: 'Ketti', lastName: 'Means', age: '34', profession: 'firefighter', city: 'Yaoundé' },
  { id: '141', firstName: 'Noelle', lastName: 'Zachary', age: '97', profession: 'worker', city: 'George Town' },
  { id: '142', firstName: 'Zaria', lastName: 'Payson', age: '56', profession: 'worker', city: 'Thiès' },
  { id: '143', firstName: 'Rebeca', lastName: 'Bergman', age: '76', profession: 'worker', city: 'Melbourne' },
  { id: '144', firstName: 'Nelle', lastName: 'Armanda', age: '49', profession: 'doctor', city: 'Saint Petersburg' },
  { id: '145', firstName: 'Arabel', lastName: 'Lacombe', age: '48', profession: 'firefighter', city: 'Málaga' },
  { id: '146', firstName: 'Eolanda', lastName: 'Kiyoshi', age: '1', profession: 'worker', city: 'Dili' },
  { id: '147', firstName: 'Beverley', lastName: 'Ledah', age: '29', profession: 'firefighter', city: 'Port Hedland' },
  { id: '148', firstName: 'Fawne', lastName: 'Ioab', age: '30', profession: 'firefighter', city: 'Hai Phong' },
  { id: '149', firstName: 'Gisela', lastName: 'Tybald', age: '96', profession: 'police officer', city: 'Baltimore' }
]
const queryOne = [
  { id: '101', firstName: 'Beverley', lastName: 'Fadiman', age: '38', profession: 'police officer', city: 'Vilnius' },
  { id: '102', firstName: 'Althea', lastName: 'Mullane', age: '25', profession: 'firefighter', city: 'Pago Pago' },
  { id: '103', firstName: 'Carolina', lastName: 'Gladstone', age: '91', profession: 'police officer', city: 'Iqaluit' },
  { id: '105', firstName: 'Carree', lastName: 'Shuler', age: '26', profession: 'doctor', city: 'Ljubljana' },
  { id: '106', firstName: 'Wileen', lastName: 'Auberbach', age: '57', profession: 'doctor', city: 'İzmir' },
  { id: '107', firstName: 'Jennica', lastName: 'Scammon', age: '59', profession: 'developer', city: 'Yokohama' },
  { id: '108', firstName: 'Zaria', lastName: 'Auberbach', age: '47', profession: 'developer', city: 'Yellowknife' },
  { id: '109', firstName: 'Bill', lastName: 'Alcott', age: '94', profession: 'developer', city: 'Bergen' },
  { id: '111', firstName: 'Valera', lastName: 'Uund', age: '78', profession: 'police officer', city: 'Minneapolis' },
  { id: '112', firstName: 'Aubrie', lastName: 'Evvie', age: '88', profession: 'firefighter', city: 'Nukus' },
  { id: '113', firstName: 'Jean', lastName: 'Maples', age: '88', profession: 'firefighter', city: 'Cork (city)' },
  { id: '114', firstName: 'Rani', lastName: 'Christal', age: '29', profession: 'developer', city: 'Lisbon' },
  { id: '115', firstName: 'Dode', lastName: 'Cath', age: '21', profession: 'firefighter', city: 'Buffalo' },
  { id: '116', firstName: 'Gale', lastName: 'Germann', age: '39', profession: 'firefighter', city: 'Mata-Utu' },
  { id: '117', firstName: 'Zaria', lastName: 'Saunderson', age: '29', profession: 'worker', city: 'Vitória' },
  { id: '118', firstName: 'Max', lastName: 'Durante', age: '56', profession: 'firefighter', city: 'Sacramento' },
  { id: '120', firstName: 'Jaime', lastName: 'Malanie', age: '67', profession: 'worker', city: 'Asmara' },
  { id: '121', firstName: 'Riannon', lastName: 'Germann', age: '59', profession: 'developer', city: 'Hamburg' },
  { id: '122', firstName: 'Larine', lastName: 'Fredi', age: '29', profession: 'police officer', city: 'Manama' },
  { id: '123', firstName: 'Ericka', lastName: 'Bollay', age: '19', profession: 'police officer', city: 'Salzburg' },
  { id: '124', firstName: 'Margalo', lastName: 'Earlie', age: '66', profession: 'doctor', city: 'Los Angeles' },
  { id: '125', firstName: 'Suzette', lastName: 'Ummersen', age: '97', profession: 'doctor', city: 'Monaco' },
  { id: '126', firstName: 'Robinia', lastName: 'Susannah', age: '24', profession: 'worker', city: 'Patna' },
  { id: '128', firstName: 'Fredericka', lastName: 'Casimir', age: '60', profession: 'worker', city: 'Taichung' },
  { id: '129', firstName: 'Selma', lastName: 'Kosey', age: '52', profession: 'worker', city: 'Bilbao' },
  { id: '130', firstName: 'Leanna', lastName: 'Rogerio', age: '91', profession: 'developer', city: 'Saskatoon' },
  { id: '131', firstName: 'Hayley', lastName: 'Noelyn', age: '44', profession: 'police officer', city: 'Hargeisa' },
  { id: '133', firstName: 'Gale', lastName: 'Kaete', age: '61', profession: 'developer', city: 'Zhengzhou' },
  { id: '134', firstName: 'Viviene', lastName: 'Kristi', age: '89', profession: 'worker', city: 'Kinshasa' },
  { id: '135', firstName: 'Rhoda', lastName: 'Phaidra', age: '80', profession: 'police officer', city: 'Majuro' },
  { id: '136', firstName: 'Carmela', lastName: 'Erminia', age: '36', profession: 'police officer', city: 'Konya' },
  { id: '138', firstName: 'Eugine', lastName: 'Berl', age: '71', profession: 'doctor', city: 'Suez' },
  { id: '139', firstName: 'Ursulina', lastName: 'Levey', age: '66', profession: 'firefighter', city: 'Düsseldorf' },
  { id: '140', firstName: 'Ketti', lastName: 'Means', age: '34', profession: 'firefighter', city: 'Yaoundé' },
  { id: '141', firstName: 'Noelle', lastName: 'Zachary', age: '97', profession: 'worker', city: 'George Town' },
  { id: '142', firstName: 'Zaria', lastName: 'Payson', age: '56', profession: 'worker', city: 'Thiès' },
  { id: '143', firstName: 'Rebeca', lastName: 'Bergman', age: '76', profession: 'worker', city: 'Melbourne' },
  { id: '144', firstName: 'Nelle', lastName: 'Armanda', age: '49', profession: 'doctor', city: 'Saint Petersburg' },
  { id: '145', firstName: 'Arabel', lastName: 'Lacombe', age: '48', profession: 'firefighter', city: 'Málaga' },
  { id: '147', firstName: 'Beverley', lastName: 'Ledah', age: '29', profession: 'firefighter', city: 'Port Hedland' },
  { id: '148', firstName: 'Fawne', lastName: 'Ioab', age: '30', profession: 'firefighter', city: 'Hai Phong' },
  { id: '149', firstName: 'Gisela', lastName: 'Tybald', age: '96', profession: 'police officer', city: 'Baltimore' }
]

const queryTwo = [
  { id: '104', firstName: 'Marylou', lastName: 'Candy', age: '13', profession: 'developer', city: 'Norilsk' },
  { id: '107', firstName: 'Jennica', lastName: 'Scammon', age: '59', profession: 'developer', city: 'Yokohama' },
  { id: '108', firstName: 'Zaria', lastName: 'Auberbach', age: '47', profession: 'developer', city: 'Yellowknife' },
  { id: '109', firstName: 'Bill', lastName: 'Alcott', age: '94', profession: 'developer', city: 'Bergen' },
  { id: '114', firstName: 'Rani', lastName: 'Christal', age: '29', profession: 'developer', city: 'Lisbon' },
  { id: '121', firstName: 'Riannon', lastName: 'Germann', age: '59', profession: 'developer', city: 'Hamburg' },
  { id: '130', firstName: 'Leanna', lastName: 'Rogerio', age: '91', profession: 'developer', city: 'Saskatoon' },
  { id: '133', firstName: 'Gale', lastName: 'Kaete', age: '61', profession: 'developer', city: 'Zhengzhou' },
  { id: '137', firstName: 'Kristan', lastName: 'Adamsen', age: '12', profession: 'developer', city: 'Saint Petersburg' }
]
const queryThree = [
  { id: '100', firstName: 'Amelia', lastName: 'Behre', age: '18', profession: 'police officer', city: 'Cayenne' },
  { id: '101', firstName: 'Beverley', lastName: 'Fadiman', age: '38', profession: 'police officer', city: 'Vilnius' },
  { id: '102', firstName: 'Althea', lastName: 'Mullane', age: '25', profession: 'firefighter', city: 'Pago Pago' },
  { id: '104', firstName: 'Marylou', lastName: 'Candy', age: '13', profession: 'developer', city: 'Norilsk' },
  { id: '105', firstName: 'Carree', lastName: 'Shuler', age: '26', profession: 'doctor', city: 'Ljubljana' },
  { id: '108', firstName: 'Zaria', lastName: 'Auberbach', age: '47', profession: 'developer', city: 'Yellowknife' },
  { id: '110', firstName: 'Wilma', lastName: 'Pauly', age: '12', profession: 'worker', city: 'Baku' },
  { id: '114', firstName: 'Rani', lastName: 'Christal', age: '29', profession: 'developer', city: 'Lisbon' },
  { id: '115', firstName: 'Dode', lastName: 'Cath', age: '21', profession: 'firefighter', city: 'Buffalo' },
  { id: '116', firstName: 'Gale', lastName: 'Germann', age: '39', profession: 'firefighter', city: 'Mata-Utu' },
  { id: '117', firstName: 'Zaria', lastName: 'Saunderson', age: '29', profession: 'worker', city: 'Vitória' },
  { id: '119', firstName: 'Celene', lastName: 'Zetta', age: '8', profession: 'doctor', city: 'Fort-de-France' },
  { id: '122', firstName: 'Larine', lastName: 'Fredi', age: '29', profession: 'police officer', city: 'Manama' },
  { id: '123', firstName: 'Ericka', lastName: 'Bollay', age: '19', profession: 'police officer', city: 'Salzburg' },
  { id: '126', firstName: 'Robinia', lastName: 'Susannah', age: '24', profession: 'worker', city: 'Patna' },
  { id: '127', firstName: 'Sibella', lastName: 'Hourigan', age: '14', profession: 'firefighter', city: 'Santiago de Cuba' },
  { id: '131', firstName: 'Hayley', lastName: 'Noelyn', age: '44', profession: 'police officer', city: 'Hargeisa' },
  { id: '132', firstName: 'Hyacinthe', lastName: 'Santoro', age: '17', profession: 'worker', city: 'Cebu City' },
  { id: '136', firstName: 'Carmela', lastName: 'Erminia', age: '36', profession: 'police officer', city: 'Konya' },
  { id: '137', firstName: 'Kristan', lastName: 'Adamsen', age: '12', profession: 'developer', city: 'Saint Petersburg' },
  { id: '140', firstName: 'Ketti', lastName: 'Means', age: '34', profession: 'firefighter', city: 'Yaoundé' },
  { id: '144', firstName: 'Nelle', lastName: 'Armanda', age: '49', profession: 'doctor', city: 'Saint Petersburg' },
  { id: '145', firstName: 'Arabel', lastName: 'Lacombe', age: '48', profession: 'firefighter', city: 'Málaga' },
  { id: '146', firstName: 'Eolanda', lastName: 'Kiyoshi', age: '1', profession: 'worker', city: 'Dili' },
  { id: '147', firstName: 'Beverley', lastName: 'Ledah', age: '29', profession: 'firefighter', city: 'Port Hedland' },
  { id: '148', firstName: 'Fawne', lastName: 'Ioab', age: '30', profession: 'firefighter', city: 'Hai Phong' }
]

module.exports = {
  queryZero, queryOne, queryTwo, queryThree
}
