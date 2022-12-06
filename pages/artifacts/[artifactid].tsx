import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtifactsDetail from "../components/ArtifactDetail";
type Artifacts = {
    artifactid: string;
    title: string;
    text: string;
    githuburl: string;
};
type Query = {
    artifactid: string;
};
export default function Artifacts() {
    const [artifact, setArtifact] = useState<Artifacts>();
    const router = useRouter();
    const query = router.query as Query;

    useEffect(() => {
        if (query.artifactid === undefined) {
            return;
        }
        async function loadArtifact() {
            const db = getFirestore();
            const ref = doc(collection(db, "artifacts"), query.artifactid);
            const artifactsDoc = await getDoc(ref);
            if (!artifactsDoc.exists()) {
                return;
            }
            const gotArtifact = artifactsDoc.data() as Artifacts;
            gotArtifact.artifactid = artifactsDoc.id;
            setArtifact(gotArtifact);
        }
        loadArtifact();
    }, [query.artifactid]);
    return (
        <div>
            {artifact ? (
                <ArtifactsDetail
                    title={artifact.title}
                    text={artifact.text}
                    githuburl={artifact.githuburl}
                />
            ) : (
                "ロード中…"
            )}
        </div>
    );
}
