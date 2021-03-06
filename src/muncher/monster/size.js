// "creatureSizes": [{
//   "id": 2,
//   "entityTypeId": 127108918,
//   "name": "Tiny",
//   "weightType": 1
// }, {


//   "traits": {
//     "size": "grg",


//     "sizeId": 7,

const SIZES = [
  { name: "Tiny", value: "tiny", size: 0.5 },
  { name: "Small", value: "sm", size: 0.8 },
  { name: "Medium", value: "med", size: 1 },
  { name: "Large", value: "lg", size: 2 },
  { name: "Huge", value: "huge", size: 3 },
  { name: "Gargantuan", value: "grg", size: 4 },
];

export function getSize (monster, DDB_CONFIG) {
  const sizeConfig = DDB_CONFIG.creatureSizes;
  const size = sizeConfig.find((s) => s.id == monster.sizeId).name;
  const sizeData = SIZES.find((s) => size == s.name);
  let token = {
    scale: 1,
    value: sizeData.size,
  };
  if (token.value < 1) {
    token.scale = token.value;
    token.value = 1;
  }

  const data = {
    value: sizeData.value,
    token: token,
  };

  return data;

}
