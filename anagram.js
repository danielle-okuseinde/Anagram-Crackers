// 3 words at a time + a 3 minute timer
// they can only make the big word
// shows definition afterwards

//read in csv

//https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript
let allWords = ['juxtaposition','arrogate','imperious','umbrage','cogent','impudent','inure','largess','rescind','eschew','pathos','torpid','effrontery','myriad','proclivity','prosaic','promulgate','alacrity','querulous','conflagration','dissemble','vicarious','pugnacious','iniquity','limpid','ephemeral','contrite','ebullient','probity','expiate','wizened','mendacious','obtuse','mawkish','invective','venerate','inchoate','diffident','brusque','obdurate','truculent','proscribe','maudlin','precocious','latent','reprove','ostensible','pariah','propensity','transient','zenith','grandiloquence','ubiquitous','ineffable','rectitude','nascent','clemency','fastidious','conundrum','undulate','fatuous','malevolent','palliate','sanguine','ribald','fallacious','hapless','veracity','abjure','replete','approbation','acerbic','acrimony','viscous','licentious','deride','propitious','hegemony','surreptitious','odious','winsome','hackneyed','credulity','surmise','laconic','pejorative','punctilious','rebuke','vitriolic','diaphanous','ignominious','vituperate','temerity','pertinacious','pallid','extant','opulent','turgid','unctuous','harangue','buttress','recalcitrant','vilify','impetuous','impertinent','sacrosanct','effulgent','enervate','pellucid','vicissitude','tenuous','anathema','repudiate','spurious','demure','cursory','iconoclast','paucity','quagmire','mercurial','surfeit','vapid','perspicacity','desecrate','solicitous','aspersion','adumbrate','verdant','rancor','antipathy','salient','obfuscate','impinge','florid','egregious','extol','blandish','munificence','puerile','decry','prescient','morass','capricious','inveterate','fetid','restive','insidious','perfidious','evince','transmute','sanctimonious','upbraid','protean','boon','deprecate','ruse','pithy','sycophant','turpitude','exculpate','implacable','dither','garrulous','reprobate','primeval','jubilant','pulchritude','cajole','assiduous','legerdemain','variegated','acumen','gregarious','ingenuous','concomitant','somnolent','neophyte','stupefy','wistful','portent','multifarious']
let allPartsOfSpeech = ['n','v','adj','n','adj','adj','v','n','v','v','n','adj','n','adj','n','adj','v','n','adj','n','v','adj','adj','n','adj','adj','adj','adj','n','v','adj','adj','adj','adj','n','v','adj','adj','adj','adj','adj','v','adj','adj','adj','v','adj','n','n','adj','n','n','adj','adj','n','adj','n','adj','n','v','adj','adj','v','adj','adj','adj','adj','n','v','adj','n','adj','n','adj','adj','v','adj','n','adj','adj','adj','adj','n','v','adj','adj','adj','v','adj','adj','adj','v','n','adj','adj','adj','adj','adj','adj','n','v','adj','v','adj','adj','adj','adj','v','adj','n','adj','n','v','adj','adj','adj','n','adj','n','adj','n','adj','adj','v','adj','n','v','adj','n','n','adj','v','v','adj','adj','v','v','n','adj','v','adj','n','adj','adj','adj','adj','adj','adj','v','v','adj','v','adj','n','v','n','adj','n','n','v','adj','v','adj','adj','adj','adj','n','v','adj','n','adj','n','adj','adj','adj','adj','n','v','adj','n','adj']
let allDefinitions = ['the act of placing two things next to each other for implicit comparison','to take without justification','commanding, domineering','resentment, offense','intellectually convincing','casually rude, insolent, impertinent','to cause someone or something to become accustomed to a situation','the generous giving of lavish gifts','to take back, repeal','to shun, avoid','an emotion of sympathy','lethargic, dormant, lacking motion','impudence, nerve, insolence','consisting of a very great number','a strong inclination toward something','plain, lacking liveliness','to proclaim, make known','eagerness, speed','whiny, complaining','great fire','to conceal, fake','experiencing through another','quarrelsome, combative','wickedness or sin','clear, transparent','short-lived, fleeting','penitent, eager to be forgiven','extremely lively, enthusiastic','virtue, integrity','to make amends for, atone','dry, shrunken, wrinkled','having a lying, false character','lacking quickness of sensibility or intellect','characterized by sick sentimentality','an angry verbal attack','to regard with respect or to honor','unformed or formless, in a beginning stage','shy, quiet, modest','short, abrupt, dismissive','unyielding to persuasion or moral influences','ready to fight, cruel','to condemn, outlaw','weakly sentimental','advanced, developing ahead of time','hidden, but capable of being exposed','to scold, rebuke','appearing as such, seemingly','an outcast','an inclination, preference','passing through briefly; passing into and out of existence','the highest point, culminating point','lofty, pompous language','existing everywhere, widespread','unspeakable, incapable of being expressed through words','uprightness, extreme morality','in the process of being born or coming into existence','mercy','meticulous, demanding, having high and often unattainable standards','puzzle, problem','to move in waves','silly, foolish','wanting harm to befall others','to reduce the severity of','optimistic, cheery','coarsely, crudely humorous','incorrect, misleading','unlucky','truthfulness, accuracy','to reject, renounce','full, abundant','praise','biting, bitter in tone or taste','bitterness, discord','not free flowing, syrupy','displaying a lack of moral or legal restraints','to laugh at mockingly, scorn','favorable','domination over others','stealthy','instilling hatred or intense displeasure','charming, pleasing','unoriginal, trite','readiness to believe','to infer with little evidence','terse in speech or writing','derogatory, uncomplimentary','eager to follow rules or conventions','to scold, criticize','having a caustic quality','light, airy, transparent','humiliating, disgracing','to berate','audacity, recklessness','shrewdness, perceptiveness','lacking color','existing, not destroyed or lost','characterized by rich abundance verging on ostentation','swollen, excessively embellished in style or language','smooth or greasy in texture, appearance, manner','a ranting speech','to support, hold up','defiant, unapologetic','to lower in importance, defame','rash; hastily done','rude, insolent','holy, something that should not be criticized','radiant, splendorous','to weaken, exhaust','easily intelligible, clear','event that occurs by chance','having little substance or strength','a cursed, detested person','to reject, refuse to accept','false but designed to seem plausible','quiet, modest, reserved','brief to the point of being superficial','one who attacks common beliefs or institutions','small in quantity','a difficult situation','characterized by rapid change or temperamentality','an overabundant supply or indulgence','lacking liveliness, dull','shrewdness, perceptiveness','to violate the sacredness of a thing or place','concerned, attentive','a curse, expression of ill-will','to sketch out in a vague way','green in tint or color','deep, bitter resentment','a strong dislike, repugnance','significant, conspicuous','to render incomprehensible','to impact, affect, make an impression','flowery, ornate','extremely bad','to praise, revere','to coax by using flattery','generosity in giving','juvenile, immature','to criticize openly','to have foreknowledge of events','a wet swampy bog; figuratively, something that traps and confuses','subject to whim, fickle','stubbornly established by habit','having a foul odor','resistant, stubborn, impatient','appealing but imperceptibly harmful, seductive','disloyal, unfaithful','to show, reveal','to change or alter in form','giving a hypocritical appearance of piety','to criticize or scold severely','able to change shape; displaying great variety','a gift or blessing','to belittle, depreciate','a trick','concisely meaningful','one who flatters for self-gain','depravity, moral corruption','to free from guilt or blame, exonerate','incapable of being appeased or mitigated','to be indecisive','talkative, wordy','evil, unprincipled','original, ancient','extremely joyful, happy','physical beauty','to urge, coax','hard-working, diligent','deception, slight-of-hand','diversified, distinctly marked','keen insight','drawn to the company of others, sociable','not devious; innocent and candid','accompanying in a subordinate fashion','sleepy, drowsy','someone who is young or inexperienced','to astonish, make insensible','full of yearning; musingly sad','an omen','having great diversity or variety']
let allExamples = ['The interior designer admired my juxtaposition of the yellow couch and green table','The king arrogated the right to order executions to himself exclusively','The imperious nature of your manner led me to dislike you at once','He called me a lily-livered coward, and I took umbrage at the insult',"Irene's arguments in favor of abstinence were so cogent that I could not resist them","The impudent young man looked the princess up and down and told her she was hot even though she hadn't asked him",'Twenty years in the salt mines inured the man to the discomforts of dirt and grime','My boss demonstrated great largess by giving me a new car',"The company rescinded its offer of employment after discovering that Jane's resume was full of lies",'George hates the color green so much that he eschews all green food','Martha filled with pathos upon discovering the scrawny, shivering kitten at her door','The torpid whale floated, wallowing in the water for hours','When I told my aunt that she was boring, my mother scolded me for my effrontery','It was difficult to decide what to do Friday night because the city presented us with myriad possibilities for fun',"In a sick twist of fate, Harold's childhood proclivity for torturing small animals grew into a desire to become a surgeon","Heather's prosaic recital of the poem bored the audience","The film professor promulgated that both in terms of sex appeal and political intrigue, Sean Connery's James Bond was superior to Roger Moore's",'For some reason, Chuck loved to help his mother whenever he could, so when his mother asked him to set the table, he did so with alacrity','If deprived of his pacifier, young Brendan becomes querulous','The conflagration consumed the entire building',"Not wanting to appear heartlessly greedy, she dissembled and hid her intention to sell her ailing father's stamp collection",'All of my lame friends learned to be social through vicarious involvement in my amazing experiences',"Aaron's pugnacious nature led him to start several barroom brawls each month",'"Your iniquity," said the priest to the practical jokester, "will be forgiven',"Mr. Johnson's limpid writing style greatly pleased readers who disliked complicated novels",'She promised she would love me forever, but her "forever" was only ephemeral: she left me after one week',"Blake's contrite behavior made it impossible to stay angry at him",'She became ebullient upon receiving an acceptance letter from her first-choice college',"Because he was never viewed as a man of great probity, no one was surprised by Mr. Samson's immoral behavior",'To expiate my selfishness, I gave all my profits to charity',"Agatha's grandmother, Stephanie, had the most wizened countenance, full of leathery wrinkles",'The mendacious content of the tabloid magazines is at least entertaining',"Political opponents warned that the prime minister's obtuse approach to foreign policy would embroil the nation in mindless war","Although some nineteenth- century critics viewed Dickens's writing as mawkish, contemporary readers have found great emotional depth in his works","My mother's irrational invective against the way I dress only made me decide to dye my hair green","The tribute to John Lennon sought to venerate his music, his words, and his legen","The country's government is still inchoate and, because it has no great tradition, quite unstable",'While eating dinner with the adults, the diffident youth did not speak for fear of seeming presumptuous',"The captain's brusque manner offended the passengers",'The obdurate old man refused to take pity on the kittens',"This club doesn't really attract the dangerous types, so why was that bouncer being so truculent?)",'The town council voted to proscribe the sale of alcohol on weekends','Although many people enjoy romantic comedies, I usually find them maudlin and shallow','Derek was so academically precocious that by the time he was 10 years old, he was already in the ninth grade',"Sigmund's dream represented his latent paranoid obsession with other people's shoes",'Lara reproved her son for sticking each and every one of his fingers into the strawberry pie',"Jack's ostensible reason for driving was that airfare was too expensive, but in reality, he was afraid of flying",'Following the discovery of his plagiarism, Professor Hurley was made a pariah in all academic circles','Dermit has a propensity for dangerous activities such as bungee jumping','Because virtually everyone in Palm Beach is a tourist, the population of the town is quite transient','I was too nice to tell Nelly that she had reached the absolute zenith of her career with that one hit of hers','The student thought her grandiloquence would make her sound smart, but neither the class nor the teacher bought it','It seems that everyone in the United States has the ubiquitous technology of television','It is said that the experience of playing with a dolphin is ineffable and can only be understood through direct encounter',"The priest's rectitude gave him the moral authority to counsel his parishioners",'Unfortunately, my brilliant paper was only in its nascent form on the morning that it was due','After he forgot their anniversary, Martin could only beg Maria for clemency','Mark is so fastidious that he is never able to finish a project because it always seems imperfect to him',"Interpreting Jane's behavior was a constant conundrum",'As the storm began to brew, the placid ocean began to undulate to an increasing degree','He considers himself a serious poet, but in truth, he only writes fatuous limericks','The malevolent old man sat in the park all day, tripping unsuspecting passersby with his cane',"The doctor trusted that the new medication would palliate her patient's discomfort",'Polly reacted to any bad news with a sanguine smile and the chirpy cry, "When life hands you lemons, make lemonade!"',"While some giggled at the ribald joke involving a parson's daughter, most sighed and rolled their eyes",'Emily offered me cigarettes on the fallacious assumption that I smoked','My poor, hapless family never seems to pick a sunny week to go on vacation','With several agencies regulating the reports, it was difficult for Latifah to argue against its veracity','To prove his honesty, the president abjured the evil policies of his wicked predecessor','The unedited version was replete with naughty words','The crowd welcomed the heroes with approbation','Jill became extremely acerbic and began to cruelly make fun of all her friends','Though they vowed that no girl would ever come between them, Biff and Trevor could not keep acrimony from overwhelming their friendship after they both fell in love with the lovely Teresa','The viscous syrup took three minutes to pour out of the bottle','Marilee has always been fascinated by the licentious private lives of politicians',"The bullies derided the foreign student's accent",'The dark storm clouds visible on the horizon suggested that the weather would not be propitious for sailing',"Britain's hegemony over its colonies was threatened once nationalist sentiment began to spread around the world",'The surreptitious CIA agents were able to get in and out of the house without anyone noticing',"Mark was assigned the odious task of cleaning the cat's litter box","After such a long, frustrating day, I was grateful for Chris's winsome attitude and childish naivete",'A girl can only hear "I love you" so many times before it begins to sound hackneyed and meaningless','His credulity made him an easy target for con men','After speaking to only one of the students, the teacher was able to surmise what had caused the fight',"The author's laconic style has won him many followers who dislike wordiness","The evening's headline news covered an international scandal caused by a pejorative statement the famous senator had made in reference to a foreign leader",'Punctilious Bobby, hall monitor extraordinaire, insisted that his peers follow the rules',"When the cops showed up at Sarah's party, they rebuked her for disturbing the peace",'When angry, the woman would spew vitriolic insults','Sunlight poured in through the diaphanous curtains, brightening the room','It was really ignominious to be kicked out of the dorm for having an illegal gas stove in my room','Jack ran away as soon as his father found out, knowing he would be vituperated for his unseemly behavior','Tom and Huck entered the scary cave armed with nothing but their own temerity',"Harry's parents were frustrated with his pertinacious insistence that a monster lived in his closet","Dr. Van Helsing feared that Lucy's pallid complexion was due to an unexplained loss of blood","My mother's extant love letters to my father are in the attic trunk","The opulent furnishings of the dictator's private compound contrasted harshly with the meager accommodations of her subjects",'The haughty writer did not realize how we all really felt about his turgid prose','The unctuous receptionist seemed untrustworthy, as if she was only being helpful because she thought we might give her a big tip',"Everyone had heard the teacher's harangue about gum chewing in class before",'The column buttresses the roof above the statue','Even when scolded, the recalcitrant young girl simply stomped her foot and refused to finish her lima beans','After the Watergate scandal, almost any story written about President Nixon sought to vilify him and criticize his behavior',"Hilda's hasty slaying of the king was an impetuous, thoughtless action","Most of your comments are so impertinent that I don't wish to dignify them with an answer",'In the United States, the Constitution is often thought of as a sacrosanct document','The golden palace was effulgent','Writing these sentences enervates me so much that I will have to take a nap after I finish','Wishing his book to be pellucid to the common man, Albert Camus avoided using complicated grammar when composing The Stranger','The vicissitudes of daily life prevent me from predicting what might happen from one day to the next','Your argument is very tenuous, since it relies so much on speculation and hearsay','I never want to see that murderer, who is an anathema to me','Kwame made a strong case for an extension of his curfew, but his mother repudiated it with a few biting words','Using a spurious argument, John convinced the others that he had won the board game on a technicality','Though everyone else at the party was dancing and going crazy, she remained demure','Late for the meeting, she cast a cursory glance at the agenda','Jane goes to one protest after another, but she seems to be an iconoclast rather than an activist with a progressive agenda','Gilbert lamented the paucity of twentieth-century literature courses available at the college',"We'd all like to avoid the kind of military quagmire characterized by the Vietnam War",'Though he was widely respected for his mathematical proofs, the mercurial genius was impossible to live with','After partaking of the surfeit of tacos and tamales at the All-You-Can-Eat Taco Tamale Lunch Special, Beth felt rather sick',"The professor's comments about the poem were surprisingly vapid and dull",'The detective was too humble to acknowledge that his perspicacity was the reason for his professional success','They feared that the construction of a golf course would desecrate the preserved wilderness','Jim, laid up in bed with a nasty virus, enjoyed the solicitous attentions of his mother, who brought him soup and extra blankets',"The rival politicians repeatedly cast aspersions on each others' integrity",'The coach adumbrated a game plan, but none of the players knew precisely what to do','The verdant leaves on the trees made the world look emerald','When Eileen challenged me to a fight, I could see the rancor in her eyes','I know you love me, but because you are a liar and a thief, I feel nothing but antipathy for you','One of the salient differences between Alison and Nancy is that Alison is a foot taller',"The detective did not want to answer the newspaperman's questions, so he obfuscated the truth",'The hail impinged the roof, leaving large dents',"The writer's florid prose belongs on a sentimental Hallmark card",'The student who threw sloppy joes across the cafeteria was punished for his egregious behavior','Violet extolled the virtues of a vegetarian diet to her meat-loving brother',"Rachel's assistant tried to blandish her into accepting the deal","The royal family's munificence made everyone else in their country rich","The judge demanded order after the lawyer's puerile attempt to object by stomping his feet on the courtroom floor",'The kind video rental clerk decried the policy of charging customers late fees',"Questioning the fortune cookie's prediction, Ray went in search of the old hermit who was rumored to be prescient",'When Theresa lost her job, she could not get out of her financial morass',"The young girl's capricious tendencies made it difficult for her to focus on achieving her goals","I'm the first to admit that I'm an inveterate coffee drinker. I drink four cups a day",'I can tell from the fetid smell in your refrigerator that your milk has spoiled','The restive audience pelted the band with mud and yelled nasty comments',"Lisa's insidious chocolate cake tastes so good but makes you feel so sick later on!",'After the official was caught selling government secrets to enemy agents, he was executed for his perfidious ways',"Christopher's hand-wringing and nail-biting evince how nervous he is about the upcoming English test",'Ancient alchemists believed that it was possible to transmute lead into gold','The sanctimonious Bertrand delivered stern lectures on the Ten Commandments to anyone who would listen, but thought nothing of stealing cars to make some cash on the side','The last thing Lindsay wanted was for Lisa to upbraid her again about missing the rent payment',"Among Nigel's protean talents was his ability to touch the tip of his nose with his tongue",'The good weather has been a boon for many businesses located near the beach','Always over-modest, he deprecated his contribution to the local charity','Oliver concocted an elaborate ruse for sneaking out of the house to meet his girlfriend while simultaneously giving his mother the impression that he was asleep in bed',"My father's long-winded explanation was a stark contrast to his usually pithy statements","Some see the people in the cabinet as the president's closest advisors, but others see them as sycophants","Sir Marcus's chivalry often contrasted with the turpitude he exhibited with the ladies at the tavern",'My discovery of the ring behind the dresser exculpated me from the charge of having stolen it',"Watch out: Once you shun Grandma's cooking, she is totally implacable",'Not wanting to offend either friend, he dithered about which of the two birthday parties he should attend',"Some talk-show hosts are so garrulous that their guests can't get a word in edgewise",'The reprobate criminal sat sneering in the cell','The first primates to walk on two legs, called Australopithecus, were the primeval descendants of modern man','The crowd was jubilant when the firefighter carried the woman from the flaming building',"Several of Shakespeare's sonnets explore the pulchritude of a lovely young man","Fred's buddies cajoled him into attending the bachelor party",'The construction workers erected the skyscraper during two years of assiduous labor','Smuggling the French plants through customs by claiming that they were fake was a remarkable bit of legerdemain','Each wire in the engineering exam was variegated by color so that the students could figure out which one was which','Because of his mathematical acumen, Larry was able to figure out in minutes problems that took other students hours',"Well, if you're not gregarious, I don't know why you would want to go to a singles party!","He must have writers, but his speeches seem so ingenuous it's hard to believe he's not speaking from his own heart",'His dislike of hard work carried with it a concomitant lack of funds','The somnolent student kept falling asleep and waking up with a jerk','As a neophyte in the literary world, Malik had trouble finding a publisher for his first novel',"Veronica's audacity and ungratefulness stupefied her best friend, Heather",'Since her pet rabbit died, Edda missed it terribly and was wistful all day long',"When a black cat crossed my sister's path while she was walking to school, she took it as a portent that she would do badly on her spelling test",'This Swiss Army knife has multifarious functions and capabilities']
let chosenIndex = [] //list of index locations of the words not the actual words
let chosenWords = []
let scrambledWords = []
let answers = []
let index = 0
window.sessionStorage.setItem("displayAns", false)

document.addEventListener('DOMContentLoaded', ()=>{
        let game = document.getElementById('test')
        if(game){
            chooseWords()
        for(var i = 0; i < chosenWords.length; i++)
        {
            eachWord = []
            for(var j = 0; j < chosenWords[i].length; j++)
            {
                eachWord.push(chosenWords[i][j])
            }
            scrambledWords.push(rearrange(eachWord))
            window.sessionStorage.setItem("chosenWords", chosenWords)
        }
        fillBank(index)
        fillWord(index)
        index+=1

        }
        
    
        let nextWord = document.getElementById('next')
        if(nextWord){
            nextWord.addEventListener('click', ()=> {
                getAnswer()
                if(index==2){
                    nextWord.innerHTML = "done"
                    fillBank(index)
                    fillWord(index)
                    index+=1
                }
                else if(index == 3){
                    window.sessionStorage.setItem("displayAns", true)
                    window.sessionStorage.setItem("answers", answers)
                    window.location = "answers.html"
                }
                else if(index == 1){
                    fillBank(index)
                    fillWord(index)
                    index+=1
                }
            })
        }

        if(window.sessionStorage.getItem("displayAns")){
            displayAnswers()
            window.sessionStorage.setItem("displayAns", false)
        }
    })


    

function displayAnswers(){
    let body = document.getElementById('answers')
    let chosen = window.sessionStorage.getItem('chosenWords').split(",")
    let ans = window.sessionStorage.getItem('answers').split(",")
    if(body){
        for(let i = 0; i<3; i++){
            let card = document.getElementById('card'+(i+1))
            document.getElementById('word'+(i+1)).innerHTML = "<b>"+chosen[i]+"</b>"
            document.getElementById('guess'+(i+1)).innerHTML = "You guessed: "+ans[i]
            let ind = allWords.indexOf(chosen[i])
            document.getElementById('definition'+(i+1)).innerHTML = "<b>Definition: </b>"+allDefinitions[ind]
            document.getElementById('speech'+(i+1)).innerHTML = "<b>Part of Speech: </b>"+allPartsOfSpeech[ind]
            document.getElementById('example'+(i+1)).innerHTML = "<b>Example Sentence: </b>"+allExamples[ind]
            if(check(chosen[i], ans[i])){
                console.log('right')
            }
            else{
                console.log('wrong')
                card.className = "card border-danger mb-3"
                document.getElementById('accuracy'+(i+1)).className = "card-body text-danger"
            }
            
        }
        document.getElementById('container').innerHTML+="<button class='btn btn-primary btn-lg btn-block' id='play-again'>play again</button>"
        document.getElementById('play-again').addEventListener('click',()=>{
            window.location = "anagram.html"
        })
    }
}
function fillWord(i){
    let word = scrambledWords[i]
    let wordSpace = document.getElementById('word')
    if(wordSpace){
        wordSpace.innerHTML = ""
        for(let j = 0; j<word.length; j++){
            wordSpace.innerHTML+="<div class='letterSpace' ondrop='drop(event)' ondragover='allowDrop(event)' ></div>"
        }
    }
}

function fillBank(i){
    let letterBank = document.getElementById('letterBank')
    if(letterBank){
        letterBank.innerHTML = ""
    let word = scrambledWords[i]
    for(let j = 0; j<word.length; j++){
        let letter = word[j]
        letterBank.innerHTML+="<img src='tiles/"+letter+".png' class='letter' alt='"+letter+"' draggable='true' ondragstart='drag(event)' id='"+letter+"-"+j+"'>"
    }
    let w = 77*word.length
    document.getElementById('letterBank').style.width = ""+w+"px"
    }
    
}
function chooseWords()
{
    for(var x = 0; x < 3; x++)
    {
        chosenIndex.push(Math.floor(Math.random()*allWords.length))
        chosenWords.push(allWords[chosenIndex[x]])
    }
}

function rearrange(word)
{
    let currentIndex = word.length, randomIndex
    while(currentIndex != 0)
    {
        randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex--
        [word[currentIndex], word[randomIndex]] = [word[randomIndex], word[currentIndex]]
    }
    return word
}

function check(word, answer){
    return word == answer
}

function getAnswer(){
    let w = document.getElementById('word')
    let answer = w.getElementsByClassName('letter')
    let ans = Array.from(answer)    
    let s = ""
    for(let i = 0; i<ans.length; i++){
        let letter = answer[i].alt
        s+=letter
    }
    answers.push(s)
    
}

function allowDrop(ev){
    ev.preventDefault()
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev){
    ev.preventDefault()
    var data = ev.dataTransfer.getData("text")
    if(ev.target.tagName == "IMG"){
        let bank = document.getElementById('letterBank')
        bank.appendChild(document.getElementById(data))
    }
    else{
        ev.target.appendChild(document.getElementById(data))
    }
}
