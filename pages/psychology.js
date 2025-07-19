import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'

export default function Psychology({ source }) {
  return (
    <div style={{ padding: '2rem' }}>
      <MDXRemote {...source} />

      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'psychology.mdx')
  const mdxContent = fs.readFileSync(filePath, 'utf-8')
  const source = await serialize(mdxContent)
  return { props: { source } }
}
