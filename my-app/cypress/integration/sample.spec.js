describe("OXゲームのテスト", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Xが3つ揃った場合、「Winner: X」が表示されること", () => {
		cy.get(".data-e2e-0").click();
		cy.get(".data-e2e-3").click();
		cy.get(".data-e2e-1").click();
		cy.get(".data-e2e-4").click();
		cy.get(".data-e2e-2").click();

		cy.contains("Winner: X");
	});

	it("OXいずれも3つ揃わなかった場合、「Draw!」が表示されること", () => {
		cy.get(".data-e2e-0").click();
		cy.get(".data-e2e-1").click();
		cy.get(".data-e2e-2").click();
		cy.get(".data-e2e-3").click();
		cy.get(".data-e2e-5").click();
		cy.get(".data-e2e-4").click();
		cy.get(".data-e2e-7").click();
		cy.get(".data-e2e-8").click();
		cy.get(".data-e2e-6").click();

		cy.contains("Draw!");
	});
});
