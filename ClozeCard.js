function ClozeCard (text, cloze){
	if(this	instanceof ClozeCard){
		this.fullText = text;
		this.cloze = cloze;
		// this.partial = this.fullText.replace(cloze, "...");
		this.partial = function(f, n){
			if (f.indexOf(n) !== -1){
				return f.replace(n, "...");
			} else { 
				console.log("Cloze was not found in text!");
				return f + "\nCloze text was not found :[";
			}
		}(this.fullText, this.cloze);
	} else {
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard
