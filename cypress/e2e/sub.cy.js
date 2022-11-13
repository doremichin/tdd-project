describe('sub spec', () => {
  it('visit sub', () => {
    cy.visit('/sub');

    cy.get('[data-cy="sub-content-box"]')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .get('.target-box')
      .should('have.class', 'bg-primary-300');

    cy.get('[data-cy="toggle"]').click();

    cy.get('.target-box').should('have.class', 'bg-primary-600');

    // ** 실제 버튼이 렌더링 됐더라도 클라이언트 뷰에서 보이지 않으면 에러가 발생됨
  });
});

describe('modal test', () => {
  it('modal open', () => {
    // 버튼 선택후 모달 열고 컨텐츠 확인
    cy.get('[data-cy="modal-button"]')
      .click()
      .get('[data-cy="sub-modal"]')
      .contains('모달 열');

    // 닫기 버튼 찾은 후 클릭
    cy.get('button').contains('닫기').click();

    // 모달이 dom에 없는지 확인  ** not.be.visible 말고 not.exist
    cy.get('[data-cy="sub-modal"]').should('not.exist');
  });
});
