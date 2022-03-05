const quotes = [
`Socialism is the people. If you're afraid of socialism, you're afraid of yourself." - Fred Hampton`,
`"All reactionaries are paper tigers. In appearance, the reactionaries are terrifying, but in reality they are not so powerful." - Mao Zedong`,
`"Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners." - Vladimir Lenin`,
`"The philosophers have only interpreted the world, in various ways; the point is to change it." - Karl Marx`,
`"Capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks." - Karl Marx`,
`"You show me a capitalist, I'll show you a bloodsucker." - Malcolm X`,
`"What we're essentially going to do is throw a lot of banana peels around ... and the machine will stumble. When the machine stumbles it gets into a policy of overkill, and it starts to devour itself." - Abbie Hoffman`,
`"The executive of the modern state is but a committee for managing the common affairs of the whole bourgeoisie." - Karl Marx`,
`"At the risk of seeming ridiculous, let me say that the true revolutionary is guided by a great feeling of love." - Ernesto "Che" Guevara`,
`"We cannot be sure of having something to live for unless we are willing to die for it." - Ernesto "Che" Guevara`,
`"It is pretty ironic that the so-called 'least advanced' people are the ones taking the lead in trying to protect all of us, while the richest and most powerful among us are the ones who are trying to drive the society to destruction." - Noam Chomsky`,
`"So long as the state exists there is no freedom. When there is freedom, there will be no state." - Vladimir Lenin`,
`"Politics begin where the masses are, not where there are thousands, but where there are millions, that is where serious politics begin." - Vladimir Lenin`

];

var len = quotes.length;
console.log(len);
var selectedNum = Math.floor(Math.random() * (len));
console.log(selectedNum)
var selectedQuote = quotes[selectedNum];
console.log(selectedQuote);
document.getElementById("quote").innerHTML = selectedQuote;