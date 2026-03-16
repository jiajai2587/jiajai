export function Footer() {
  return (
    <>
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank">MIT LICENSE</a>
      <span>
        <span>佳佳热点追踪 © 2026 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
      <span className="mx-2">|</span>
      <span>
        客服微信: <span className="font-medium">xiaoqi19860607</span>
      </span>
    </>
  )
}
