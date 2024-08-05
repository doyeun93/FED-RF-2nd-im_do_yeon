-- 주석
-- DB는 크게 두가지 DDL / DML 이 있다
-- DML은 크루드(CRUD: CREATE(INSERT), READ(SELECT), UPDATE, DELETE)
-- [ SELECT(대소문자 구분 안함) 선택항목 from 테이블명 where 조건절 ]
-- SELECT * FROM Customers;
-- SELECT city FROM Customers;
-- SELECT address, city FROM Customers;
-- SELECT address, city FROM Customers where city='Madrid';
-- like 검색하기 %있는 부분이 자유로운 부분임
select * from Customers where city like "a%"; 
-- -> 앞 글자 A로 시작하는 글자 찾을 때
select * from Customers where city like "%co%"; 
-- -> 중간에 co있는 글자 찾을 때
select * from Customers where city like "%n"; 
-- -> 끝 글자 n있는 글자 찾을 때