-- 오늘의 쿼리 : 
-- 모두 지워보자! 조건없이!
-- delete from 테이블명
delete from `friens`

-- 지운 후 다시 데이터 입력하면 이전 데이터 개수 다음번호가 입력됨
-- 데이터 이력이 지워지지 않음.
-- 완전 초기화하려면 truncate table 테이블명
TRUNCATE TABLE `friends`


-- 전체 레코드 개수 구하기
SELECT COUNT(*) AS "전체개수" FROM `friends` 


-- fname 항목에 의한 오름차순 : ORDER BY `fname` ASC
SELECT * FROM `friends` ORDER BY `fname` ASC

-- fname 항목에 의한 오름차순 : ORDER BY `fname` DESC
SELECT * FROM `friends` ORDER BY `fname` DESC