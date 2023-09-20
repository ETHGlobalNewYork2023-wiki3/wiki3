# wiki3 - wikipedia on web3 - the truth on web3

## motivation

given a statement S, we are going to define it's veracity (truth value) as any number between 0 and 1, 0 standing for totally false, 1 for totally true (fuzzy logic).

the distinction between truth and falsehood is of highest importance in any decision making. concerns over the ability to distinguish true from false information are acknowledged by many (e.g. "fake news").

### truth is social
truth can be defined as anything that follows via logic from some set of axioms. since ultimately these axioms are socially defined, all truth can be called social.

### truth as reliable knowledge
an approximation to truth can be given as the reliability of the knowledge/information contained within the statement. reliability can be measured statistically in the predictive power of future world states given certain knowledge. e.g. the formula E=mc^2 more reliably predicts the future vs. E=mc^3, such that most people would consider the former more true than the latter.

### wikipedia
human society keeps reliable knowledge in so called "white papers". white papers are summarized in encyclopedias. the best, but definitely not perfect, encyclopedia in current existence is called wikipedia.

### web3
the goal of this project is to bring true information to web3. actually, this project allows for the transparent and decentralized measurement and display (searchability) of the veracity of any information.

## how does it work?

given any information, allow people to vote/record the veracity of this information on a DLT (distributed ledger), as believed by this person.

each person has a set of identities connected to it. e.g. a person might be a father and a biologist and a resident of NYC and a citizen of the US and a member of some political party and part of some professional guild and ... etc.

we can now check, on a frontend, what the average veracity of a given information is considering a filter on identities.
e.g.
"how do professional biologists rate the veracity of Darwin's original paper?"
"how do residents of my city rate the veracity of <some specific tweet>?"
"how do non-scientists in my country rate the veracity of the theory of general relativity?"

each person can judge for itself the veracity of any information. wiki3 allows this person to transparently see the judgement of other groups of interest to base it's own judgement upon. e.g. at a social event, i could claim that 99% of professional biologists believe that Darwin's main paper is more true than false, but how do i prove that? in lieu of a metastudy, wiki3 provides an efficient solution.

## identities

an id is a DID (decentralized identity) and is to be represented as an NFT or soulboud NFTs.
this project would allow different types DIDs as they evolve.

after the tech is implemented, an effort should be made to onboard various institutions. e.g. start with universities. given a university org chart, supply DIDs via the university email (also as mechanism of reissuance/cancelation). start with one high reputation university, which motivates other universities to follow. approach guilds. governments. etc.

## Lens - the truth lives on Lens

the Lens framework provides a data structure that if interpreted opportunistically, provides this project the entire backend.

information -> publication
vote -> comment with a specific strucfure: 
WIKI3_veracity_voterid1,voterid2,voterid3,...
e.g.
WIKI3_0.764_3874384,3897345,8987456,...

the ids are recorded in the vote at the time of voting. e.g. a biologist working for MIT voted a certain way, but now does not work for MIT anymore. we will count the vote based on the identities present at voting time.

identities can be extracted from the users' contract.

? does the vote need to include how the publication is interpreted. e.g. the same data as txt can have a different veracity vs as mp4.

## UI

- login
- search bar for information (via content uri at first, later can add features to search based on actual content)
- filter bar to add identities that are ANDed (via NFT id at first, translation from human language later)
- show endless scroll of publications that have at least one wiki3 vote
- keep it simple

## tokenomics/incentives

each vote gives the voter 1 WIKI3 coin. 

wikipedia is run by volunteers (only some of which are biased) and donations are used to fund server costs.

WIKI3 coins would be kept in a smart treasury (balancer.fi). donations to this treasury can thus fund gasless transactions to vote (equivalent to web2 server costs). these donations plus market effects from pride of being a contributor to the maintanence of truth incentivise voting.

one could think about allowing a publication to offer an incentive to be voted for (regardless of veracity = unbiased). e.g. i wrote a paper and am offering some currency for voters. not in 1st version.
