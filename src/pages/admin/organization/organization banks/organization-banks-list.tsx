import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
} from "react-admin";

const DocumentField = ({ record }) => {
    if (!record?.Document) return null;

    const url = record.Document;
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(url);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {isImage && (
                <img
                    src={url}
                    alt="document preview"
                    style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: 6,
                        border: "1px solid #ddd",
                    }}
                />
            )}

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", fontSize: 12 }}
            >
                Download
            </a>
        </div>
    );
};

export const OrganizationBanksList = () => (
    <List title={"Organization Banks"}>
        <DataTable>

            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>

        </DataTable>
    </List>
);