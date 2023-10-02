// codewars level 4 challenge - https://www.codewars.com/kata/52996b5c99fdcb5f20000004/train/javascript 

function runoff(voters){
    let votesThreshold = voters.length/2;
    let answer = 0;
    let newVoters = [...voters] ;
    //function for turning top votes into an object
    let topVotesObj = function(currentvotes){
    let obj = {}
    //map votes to obj
    for(let i = 0; i < currentvotes.length; i++){
        if(obj[currentvotes[i][0]]){
            obj[currentvotes[i][0]]++;
        }
        else{
            obj[currentvotes[i][0]] = 1; 
        }
    }
    return obj
}
    // check for 50%
    function fiftyCheck(topvotes){
        let objKeys = Object.keys(topvotes)
        for(let i = 0; i < objKeys.length; i++){
            if(topvotes[objKeys[i]] > votesThreshold){
                answer = objKeys[i]
            }
        }
            }
    // todo function which removes all subjects from newVoters which dont appear in anyones top vote
    function removeNonVotes(){
        let topVotes = topVotesObj(newVoters), topVotesList = Object.keys(topVotes), subjectList = newVoters[0], unusedSubjects = [];
        for(let i = 0; i < subjectList.length; i++){
            if(!topVotesList.includes(subjectList[i])){
                unusedSubjects.push(subjectList[i]);
            }
        }
        //unused subjects contains an array of 'non voted' subjects whuch need to be removed from the voter arrays (newVoters)
        for(let i = 0; i < unusedSubjects.length; i++){
            for(let j = 0; j < newVoters.length; j++){
                newVoters[j] = newVoters[j].filter((item) => item != unusedSubjects[i])
            }
        }
    } 
        // function which provides an array of the values to remove from newVoters based on having the fewest votes
        function findFewestVotes(votesObj){
            let voteKeys = Object.keys(votesObj)
            let voteCountsNum = [];
            for(let i = 0; i < voteKeys.length; i++){
                voteCountsNum.push(Number(votesObj[voteKeys[i]]));
            }
            let leastVoteNumber = Math.min(...voteCountsNum)
            //any key from votes obj with the leastVoteNumber value need to be returned
            let valuesToRemove = [];
            for(let i = 0; i < voteKeys.length; i++){
                if(votesObj[voteKeys[i]] == leastVoteNumber){
                    valuesToRemove.push(voteKeys[i]);
                }
            }
            
            console.log(valuesToRemove.length, voteKeys.length)

            if(valuesToRemove.length == voteKeys.length || valuesToRemove.length == 0){
                answer = 'undefined';
            }
            return valuesToRemove
        }
        // function which removes subjects from newVoters - recieved as an array
        function removeFromVoters(valuesToRemove){
            for(let i = 0; i < valuesToRemove.length; i++){
                for(let j = 0; j < newVoters.length; j++){
                    newVoters[j] = newVoters[j].filter((item) => item != valuesToRemove[i])
                }
            }
        }

        //first remove non top votes from the whole array      
        removeNonVotes()
        //then check to see if any of the top votes have above 50% majority using the updated voter arrays and update 'answer' if so
        //check for 50%
        fiftyCheck(topVotesObj(newVoters))
        
        if(answer == 0){
            let fewestVotes = findFewestVotes(topVotesObj(newVoters))
            removeFromVoters(fewestVotes)
            fiftyCheck(topVotesObj(newVoters))
        }

        if(answer == 0){
            let fewestVotes = findFewestVotes(topVotesObj(newVoters))
            removeFromVoters(fewestVotes)
            fiftyCheck(topVotesObj(newVoters))
        }

        if(answer == 0){
            let fewestVotes = findFewestVotes(topVotesObj(newVoters))
            removeFromVoters(fewestVotes)
            fiftyCheck(topVotesObj(newVoters))
        }
        
        
        if(answer == 'undefined'){
          return undefined
        }
        return answer
      }




