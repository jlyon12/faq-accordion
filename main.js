const questionNodes = document.querySelectorAll(
	".accordion-container__list__item__heading"
);

questionNodes.forEach((node) => {
	node.addEventListener("click", (e) => {
		const { id } = e.target;
		const questionNode = document.getElementById(id);
		// question IDs are formatted 'q#', answer IDs by 'a#' and share the same number. The answer node can be found using the question node's id.
		const answerNode = document.getElementById(`a${id.slice(1)}`);
		questionNode.classList.toggle("active");
		answerNode.classList.toggle("active");
	});
});
