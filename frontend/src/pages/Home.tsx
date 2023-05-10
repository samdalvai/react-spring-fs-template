import Button from "../components/Button";
import client from "../services/client";
import { useState } from "react";

export default function Home() {
    const [testMessage, setTestMessage] = useState<string>('');

    const handleTest = () => {
        client.get('api/test').then(res => {
            setTestMessage(res.data);
        }).catch(error => {
            setTestMessage("Error");
        })
    }

    return (
        <div>
            <Button
                color="blue"
                label={ testMessage === '' ? "Test" : testMessage}
                name={"test"}
                onClick={handleTest} />
        </div>
    )
}