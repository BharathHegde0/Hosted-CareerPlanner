var sub = document.getElementById("sub");

const options = document.getElementsByClassName("option-buttons");
for (let i = 0; i < options.length; i++) {
	options[i].addEventListener("click", () => {
		options[i].classList.toggle("option-button-clicked");
	});
}

sub.addEventListener("click", () => {
	const options_sel = [
		...document.getElementsByClassName("option-button-clicked"),
	].map((element) => element.value);
	console.log(options_sel);

	var res_cont = document.getElementById("results-cont");
	res_cont.classList.remove("hide");
	res_cont.classList.add("show-res");

	// Remove the hide class from all career options first
	const allCareerOptions = document.getElementsByClassName("image");
	for (let i = 0; i < allCareerOptions.length; i++) {
		allCareerOptions[i].classList.remove("show");
	}

	// Business Analyst
	if (
		(options_sel.includes("busi") && options_sel.includes("lead")) ||
		(options_sel.includes("probsol") && options_sel.includes("extro")) ||
		((options_sel.includes("ambit") || options_sel.includes("org")) &&
			options_sel.includes("office"))
	) {
		document.getElementById("busian").classList.remove("hide");
		document.getElementById("busian").classList.add("show");
	}

	// Civil Engineer
	if (
		(options_sel.includes("sci") ||
			options_sel.includes("des") ||
			options_sel.includes("tech")) &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("extro") ||
			options_sel.includes("flexi") ||
			options_sel.includes("org") ||
			options_sel.includes("ambit")) &&
		(options_sel.includes("office") || options_sel.includes("cust"))
	) {
		document.getElementById("civil").classList.remove("hide");
		document.getElementById("civil").classList.add("show");
	}

	// Cyber Security Expert
	if (
		options_sel.includes("tech") &&
		(options_sel.includes("atten") || options_sel.includes("probsol")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("flexi") ||
			options_sel.includes("pat") ||
			options_sel.includes("org")) &&
		(options_sel.includes("office") ||
			options_sel.includes("cust") ||
			options_sel.includes("rem"))
	) {
		document.getElementById("cybersec").classList.remove("hide");
		document.getElementById("cybersec").classList.add("show");
	}

	// Data Scientist
	if (
		options_sel.includes("tech") &&
		(options_sel.includes("probsol") ||
			options_sel.includes("atten") ||
			options_sel.includes("create")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("pat") ||
			options_sel.includes("flexi")) &&
		(options_sel.includes("office") ||
			options_sel.includes("rem") ||
			options_sel.includes("cust"))
	) {
		document.getElementById("datasci").classList.remove("hide");
		document.getElementById("datasci").classList.add("show");
	}

	// Doctor
	if (
		(options_sel.includes("sci") ||
			options_sel.includes("soc") ||
			options_sel.includes("hel")) &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("ambit") ||
			options_sel.includes("pat") ||
			options_sel.includes("flexi") ||
			options_sel.includes("org")) &&
		(options_sel.includes("lab") ||
			options_sel.includes("cust") ||
			options_sel.includes("lab"))
	) {
		document.getElementById("doc").classList.remove("hide");
		document.getElementById("doc").classList.add("show");
	}

	// Fashion Designer
	if (
		(options_sel.includes("art") ||
			options_sel.includes("des") ||
			options_sel.includes("busi")) &&
		(options_sel.includes("probsol") ||
			options_sel.includes("atten") ||
			options_sel.includes("create")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("flexi") ||
			options_sel.includes("ambit") ||
			options_sel.includes("pati")) &&
		(options_sel.includes("office") || options_sel.includes("cust"))
	) {
		document.getElementById("fash").classList.remove("hide");
		document.getElementById("fash").classList.add("show");
	}

	// Film Director
	if (
		(options_sel.includes("art") || options_sel.includes("des")) &&
		(options_sel.includes("lead") ||
			options_sel.includes("create") ||
			options_sel.includes("atten") ||
			options_sel.includes("lead")) &&
		(options_sel.includes("extro") ||
			options_sel.includes("pati") ||
			options_sel.includes("ambit") ||
			options_sel.includes("org") ||
			options_sel.includes("flexi")) &&
		(options_sel.includes("cust") || options_sel.includes("office"))
	) {
		document.getElementById("filmd").classList.remove("hide");
		document.getElementById("filmd").classList.add("show");
	}

	// Graphic Designer
	if (
		(options_sel.includes("tech") ||
			options_sel.includes("art") ||
			options_sel.includes("des")) &&
		(options_sel.includes("probsol") ||
			options_sel.includes("create") ||
			options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("flexi") ||
			options_sel.includes("ambit") ||
			options_sel.includes("pati")) &&
		(options_sel.includes("office") ||
			options_sel.includes("cust") ||
			options_sel.includes("rem"))
	) {
		document.getElementById("graphdes").classList.remove("hide");
		document.getElementById("graphdes").classList.add("show");
	}

	// Add other career options here and apply the same logic for each one

	// ... (previous code)

	// Marketing
	if (
		(options_sel.includes("art") || options_sel.includes("busi")) &&
		(options_sel.includes("lead") ||
			options_sel.includes("create") ||
			options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("ambit")) &&
		(options_sel.includes("flexi") ||
			options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("ambit")) &&
		(options_sel.includes("office") || options_sel.includes("rem"))
	) {
		document.getElementById("mark").classList.remove("hide");
		document.getElementById("mark").classList.add("show");
	}

	// Mechanical Engineer
	if (
		(options_sel.includes("sci") || options_sel.includes("tech")) &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("org") ||
			options_sel.includes("ambit")) &&
		(options_sel.includes("office") || options_sel.includes("lab"))
	) {
		document.getElementById("mechen").classList.remove("hide");
		document.getElementById("mechen").classList.add("show");
	}

	// Physicist
	if (
		options_sel.includes("sci") &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("ambit")) &&
		(options_sel.includes("office") || options_sel.includes("lab"))
	) {
		document.getElementById("phys").classList.remove("hide");
		document.getElementById("phys").classList.add("show");
	}

	// Police
	if (
		options_sel.includes("soc") &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("extro") ||
			options_sel.includes("org") ||
			options_sel.includes("pat")) &&
		(options_sel.includes("office") || options_sel.includes("cust"))
	) {
		document.getElementById("pol").classList.remove("hide");
		document.getElementById("pol").classList.add("show");
	}

	// Software Engineer
	if (
		options_sel.includes("tech") &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("flexi") ||
			options_sel.includes("ambit") ||
			options_sel.includes("org")) &&
		(options_sel.includes("office") ||
			options_sel.includes("rem") ||
			options_sel.includes("cust"))
	) {
		document.getElementById("softeng").classList.remove("hide");
		document.getElementById("softeng").classList.add("show");
	}

	// Professor
	if (
		(options_sel.includes("edu") || options_sel.includes("tech")) &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("flexi") ||
			options_sel.includes("ambit") ||
			options_sel.includes("pat")) &&
		(options_sel.includes("office") || options_sel.includes("rem"))
	) {
		document.getElementById("prof").classList.remove("hide");
		document.getElementById("prof").classList.add("show");
	}

	// Therapist
	if (
		options_sel.includes("hel") &&
		(options_sel.includes("probsol") || options_sel.includes("atten")) &&
		(options_sel.includes("intro") ||
			options_sel.includes("extro") ||
			options_sel.includes("ambit") ||
			options_sel.includes("pat") ||
			options_sel.includes("org")) &&
		(options_sel.includes("office") ||
			options_sel.includes("rem") ||
			options_sel.includes("cust"))
	) {
		document.getElementById("ther").classList.remove("hide");
		document.getElementById("ther").classList.add("show");
	}

	// ... (continue adding other career options)
	for (let i = 0; i < allCareerOptions.length; i++) {
		allCareerOptions[i].classList.add("hide");
	}
});
