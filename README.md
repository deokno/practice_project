# 교육 202401

## 커밋 메시지 규칙

``` text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```  

- `fix`: 유형 의 커밋은 fix 코드베이스의 버그를 패치합니다.
- `feat`: 유형 의 커밋은 feat 코드베이스에 새로운 기능을 도입합니다.
- `fix` 및 `feat` 이외: [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)에 나온 유형의 내용으로 적용합니다.  
ex) `build:`, `chore:`, `ci:`, `docs:`, `perf:`, `refactor:`, `revert:`, `style:`, `test:` ...

### 참조

- [구글 - 커밋 메시지 가이드](https://developers.google.com/blockly/guides/contribute/get-started/commits)
- [컨벤셔널 커밋 - 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)