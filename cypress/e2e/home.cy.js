describe('home spec', () => {
  it('visit home', () => {
    // 홈 방문 후
    cy.visit('/');

    // data-cy="sub-button" 라는 attribute 를 가진,
    // 안에 subLink 라는 컨텐츠를 가진 dom을 선택 그리고 클릭
    cy.get('[data-cy="sub-button"]').contains('subLink').click();

    // /sub 페이지 방문 완료
    cy.visit('/sub');

    // ** 실제 버튼이 렌더링 됐더라도 클라이언트 뷰에서 보이지 않으면 에러가 발생됨
  });
});
