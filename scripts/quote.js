const quotes = [
`Socialism is the people. If you're afraid of socialism, you're afraid of yourself."<br>- Fred Hampton`,
`"All reactionaries are paper tigers. In appearance, the reactionaries are terrifying, but in reality they are not so powerful."<br>- Mao Zedong`,
`"Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners."<br>- Vladimir Lenin`,
`"The philosophers have only interpreted the world, in various ways; the point is to change it."<br>- Karl Marx`,
`"Capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks."<br>- Karl Marx`,
`"You show me a capitalist, I'll show you a bloodsucker."<br>- Malcolm X`,
`"What we're essentially going to do is throw a lot of banana peels around ... and the machine will stumble. When the machine stumbles it gets into a policy of overkill, and it starts to devour itself."<br>- Abbie Hoffman`,
`"The executive of the modern state is but a committee for managing the common affairs of the whole bourgeoisie."<br>- Karl Marx`,
`"At the risk of seeming ridiculous, let me say that the true revolutionary is guided by a great feeling of love."<br>- Ernesto "Che" Guevara`,
`"We cannot be sure of having something to live for unless we are willing to die for it."<br>- Ernesto "Che" Guevara`,
`"It is pretty ironic that the so-called 'least advanced' people are the ones taking the lead in trying to protect all of us, while the richest and most powerful among us are the ones who are trying to drive the society to destruction."<br>- Noam Chomsky`,
`"So long as the state exists there is no freedom. When there is freedom, there will be no state."<br>- Vladimir Lenin`,
`"Politics begin where the masses are, not where there are thousands, but where there are millions, that is where serious politics begin."<br>- Vladimir Lenin`,
`"I am convinced there is only one way to eliminate these grave evils, namely through the establishment of a socialist economy, accompanied by an educational system which would be oriented toward social goals."<br>- Albert Einstein`,
`"There is no democracy without socialism, and no socialism without democracy."<br>- Rosa Luxemburg`,
`"[Reporter: 'How much is it worth to you? What's your price?'] To call off the revolution? ... My life."<br>- Abbie Hoffman`
];

var len = quotes.length;
console.log(len);
var selectedNum = Math.floor(Math.random() * (len));
console.log(selectedNum)
var selectedQuote = quotes[selectedNum];
console.log(selectedQuote);
document.getElementById("quote").innerHTML = selectedQuote;