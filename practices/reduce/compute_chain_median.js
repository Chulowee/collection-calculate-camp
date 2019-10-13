'use strict';

function compute_chain_median(collection) {
//   let chain = collection.split("->");
//   return chain.map(number =>{
//     if(chain.length()%2==0){
//       return chain.get(chain.length()+1/2)+
//             chain.get(chain.length()-1/2);
//     }else{
//       return chain.get(chain.length()+1/2);
//     }
//   }).reduce((a,b) => b/2);
// }
// arrayList.stream()
// .sorted()
// .map(number -> {
//     if (arrayList.size()%2==0){
//         return arrayList.get((arrayList.size()+1)/2) +
//                 arrayList.get((arrayList.size()-1)/2) ;
//     }else {
//         return arrayList.get((arrayList.size()+1)/2);
//     }
// })
// .mapToDouble(Integer::doubleValue)
// .reduce((a,b) -> b/2)
// .getAsDouble()
}

module.exports = compute_chain_median;
