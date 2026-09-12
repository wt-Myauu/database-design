# backend

Spring Boot 4.1.1 / Java 17 / Gradle(Kotlin DSL) / MySQL 8 + Flyway

## 준비

MySQL에 데이터베이스만 만들어 두면 된다. 테이블은 Flyway가 만든다.

```sql
CREATE DATABASE data_base_design
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_0900_ai_ci;
```

접속 정보는 `src/main/resources/application-local.yml` 에 둔다.
이 파일은 **`.gitignore` 에 걸려 있어 커밋되지 않는다.**
새로 클론한 사람은 템플릿을 복사해서 본인 값을 채운다.

```bash
cp src/main/resources/application-local.yml.example    src/main/resources/application-local.yml
```

## 실행

```bash
./gradlew bootRun
```

기본 활성 프로파일이 `local` 이라 별도 옵션이 필요 없다.
다른 프로파일로 띄우려면 `SPRING_PROFILES_ACTIVE` 를 준다.

| 설정 | 위치 |
| --- | --- |
| DB 접속 정보 | `application-local.yml` (커밋 안 함) |
| `APP_JWT_SECRET` | 환경변수. 미지정 시 개발용 기본값 (HS256, 32바이트 이상) |
| `APP_JWT_EXPIRE_SECONDS` | 환경변수. 기본 `3600` |

## 스키마 변경

`src/main/resources/db/migration/V{n}__{설명}.sql` 를 추가한다.

- **이미 적용된 파일은 수정하지 않는다.** 체크섬이 바뀌어 다른 사람 DB에서 실패한다.
- JPA는 `ddl-auto: validate` 라 스키마를 만들지 않고 매핑만 검증한다.

## 테스트

```bash
./gradlew test
```

테스트는 MySQL 없이 돌도록 `test` 프로파일(H2, Flyway off, `ddl-auto: create-drop`)을 쓴다.
마이그레이션 SQL 자체는 `bootRun`으로 실제 MySQL에 붙여서 확인한다.

## API

| 메서드 | 경로 | 인증 |
| --- | --- | --- |
| POST | `/api/auth/signup` | X |
| POST | `/api/auth/login` | X |
| GET | `/api/auth/check-login-id?loginId=` | X |
| GET | `/api/users/me` | Bearer |

```bash
curl -X POST http://localhost:8080/api/auth/signup \
  -H 'Content-Type: application/json' \
  -d '{"loginId":"tester01","password":"password1234","nickname":"테스터"}'

curl -X POST http://localhost:8080/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"loginId":"tester01","password":"password1234"}'
```

## 패키지 구조

```
com.database_design.demo
├── domain/user          유저 도메인 (entity / repository / service / controller / dto)
└── global
    ├── config           SecurityConfig, JpaAuditingConfig, CorsConfig
    ├── error            ErrorCode, BusinessException, GlobalExceptionHandler
    └── security         JwtProperties, JwtTokenProvider
```

스키마 설계 문서는 [docs/스키마 설계/01-유저-스키마-설계.md](../docs/스키마%20설계/01-유저-스키마-설계.md).
