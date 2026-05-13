// function

const find_ancestry = (language) => {
let ancestry_chain = []
let current_language = language
while(current_language){
ancestry_chain.push(current_language)
current_language = current_language.parent
}
return ancestry_chain
   


}