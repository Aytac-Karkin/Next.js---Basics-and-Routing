import { introduction } from "@/resources/lib/data";
import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <div>
      <h1>The Lord of Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
