# 바른길 이사

이사 준비 순서와 점검표를 제공하는 한국어 정보 사이트입니다. [FreightEdge 공개 소스](https://github.com/themixlyweb/nextjs-logistics-website-template)의 Next.js 프로젝트 구조와 공통 컴포넌트를 바탕으로 구성했으며, 원본 MIT 라이선스는 `LICENSE`에 보존했습니다. 원본의 화물운송 문구와 예시 이미지는 사용하지 않습니다.

## 로컬 실행

Node.js 20 이상에서 `npm ci`, `npm run dev`, `npm run build`를 사용합니다.

## 배포 전 필수 설정

Vercel 프로젝트에 GitHub 저장소를 연결하고 프레임워크를 Next.js로 선택합니다. `NEXT_PUBLIC_SITE_URL`을 실제 HTTPS 도메인으로 설정해야 canonical과 OG URL, `/sitemap.xml`이 해당 도메인을 가리킵니다. 도메인 미설정 시 sitemap은 503을 반환하므로 네이버 제출 전에 반드시 설정하세요. 사이트 소유 확인 태그는 네이버 서치어드바이저에서 발급한 값을 받은 뒤에만 추가합니다.

이 사이트는 이사 준비 정보 안내용이며 사업체 운영, 견적 제공, 고객 후기나 실적을 주장하지 않습니다.
