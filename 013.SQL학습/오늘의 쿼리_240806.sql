-- 오늘은 Insert into
-- INSERT INTO 테이블명 (항목명) 
-- VALUES (값);


-- 먼저 테이블 만들기 -> mydb 데이터베이스에 생성

CREATE TABLE `friends`(
   fnum int NOT null AUTO_INCREMENT,
    fname varchar(20),
    ftel char(11),
    faddr varchar(200),
    fmsg text(1000),
    fdate timestamp,
    PRIMARY KEY (fnum)
);


-- 첫번째 레코드 입력
INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
VALUES ("이도","01011112222","서울시 종로구","세종대왕 만만세~!!!");

-- 두번째 레코드 입력
INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
VALUES ("김종서","01011113333","서울시 중구","임금께 충성~!!!");

-- 세번째 레코드 입력
INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
VALUES ("공유","01011114444","서울시 서초구","도깨비 만세~!!!");


-- 선택쿼리
SELECT fname FROM `friends` WHERE fname = "공유";

SELECT `faddr` FROM `friends` WHERE `faddr` LIKE "%중구";

-- 선택항목 별칭(as)으로 출력하기(faddr -> 주소로 바꿔서 출력해라)
SELECT `faddr` AS "주소",`fname` as "이름",`ftel` AS "전화번호" FROM `friends` WHERE `faddr` LIKE "%중구";
