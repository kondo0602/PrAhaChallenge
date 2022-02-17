describe("OXゲームのテスト", () => {
	it("Xが3つ揃った場合、「Winner: X」が表示されること", () => {
		cy.visit("http://localhost:3000/");

		cy.get(".data-e2e-0").click();
		cy.get(".data-e2e-3").click();
		cy.get(".data-e2e-1").click();
		cy.get(".data-e2e-4").click();
		cy.get(".data-e2e-2").click();

		cy.contains("Winner: X");
	});
});
