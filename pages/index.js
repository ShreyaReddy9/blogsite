import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'

export default function Home({ source }) {
  return (
    <div >
      <MDXRemote {...source} />
      <h3 style={{marginBottom: '0.1rem',fontSize: '18px'}}>
      # <span style={{ textDecoration: 'underline',textDecorationColor: 'green',textDecorationThickness:'3px'}}> <Link href='/tech'> Dive Into Tech </Link> : Stories From a World of Computer</span>
      </h3>
      <p style={{ fontSize: '15px', marginTop: '0' }}>
      A curious human's journal into software, systems, and surprises
      </p>

      <h3 style={{marginBottom: '0.1rem',fontSize: '18px'}}>
      # <span style={{ textDecoration: 'underline',textDecorationColor: 'green',textDecorationThickness:'3px'}}> <Link href='/psychology'> Psychology </Link> : Why We Do What We Do</span>
      </h3>
      <p style={{ fontSize: '15px', marginTop: '0' }}>
      Human behavior is fascinating. Much of our decision-making happens <span style={{ textDecoration: 'underline',textDecorationColor: 'brown',textDecorationThickness:'3px' }}>unconsciously</span>, driven by emotional and evolutionary triggers.
      </p>
      
      
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'index.mdx')
  const mdxContent = fs.readFileSync(filePath, 'utf-8')
  const source = await serialize(mdxContent)
  return { props: { source } }
}
