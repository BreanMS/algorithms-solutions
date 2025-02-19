/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let citationsSort = citations.sort((a,b) =>  a-b).reverse();
    hIndexNumber = 0;

    console.log(citationsSort)

    for (i in citationsSort){
        if (hIndexNumber < citationsSort[i]){
            hIndexNumber++
        }
    }
    return hIndexNumber
};

citations = [3,0,6,1,5]
console.log(hIndex(citations))

// ##python Soulution

// class Solution:
//   def hIndex(self, citations: list[int]) -> int:
//     n = len(citations)

//     citations.sort()
// If the citation is greater than or equal to the number of papers that has that citation or more, then it is a valid h-index.
//     for i, citation in enumerate(citations):
//       if citation >= n - i:
//         return n - i

//     return 0