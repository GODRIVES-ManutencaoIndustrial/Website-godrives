import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { subscribe } from "diagnostics_channel"

type EmailTemplateProps = {
  name: string
  number: string
  email: string
  vaga?: string
  textarea: string
  subject: string
}

export function EmailTemplate({
  email,
  name,
  textarea,
  number,
  vaga,
  subject,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  src={`https://website-tau-pink.vercel.app/logoMarcaPng.png`}
                  width="316"
                  height="40"
                  alt="Logo GODRIVES"
                  style={sectionLogo}
                />
              </Column>
            </Row>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
          </Section>

          <Section style={paragraphContent}>
            <Row>
              <Text style={heading}>{subject}</Text>
            </Row>
          </Section>

          <Section style={paragraphContent}>
            <Row style={formInputContent}>
              <Row>
                <Text style={formInputTitle}>Nome:</Text>
              </Row>
              <Row>
                <Text style={formInputText}>{name}</Text>
              </Row>
            </Row>
            <Row style={formInputContent}>
              <Row>
                <Text style={formInputTitle}>Telefone:</Text>
              </Row>
              <Row>
                <Text style={formInputText}>{number}</Text>
              </Row>
            </Row>
            <Row style={formInputContent}>
              <Row>
                <Text style={formInputTitle}>Email:</Text>
              </Row>
              <Row>
                <Text style={formInputText}>{email}</Text>
              </Row>
            </Row>
            {vaga && (
              <Row style={formInputContent}>
                <Row>
                  <Text style={formInputTitle}>Área de Interesse:</Text>
                </Row>
                <Row>
                  <Text style={formInputText}>{vaga}</Text>
                </Row>
              </Row>
            )}

            <Row style={{ ...formInputContent, marginTop: "32px" }}>
              <Row>
                <Text style={formInputTitle}>Mensagem:</Text>
              </Row>
              <Row>
                <Text style={formInputText}>{textarea}</Text>
              </Row>
            </Row>
          </Section>

          <Section style={paragraphContentFooter}>
            <Text style={{ ...paragraph, margin: "0" }}>Obrigado,</Text>
            <Text style={paragraphContactText}>Equipe Go Drives</Text>
          </Section>

          <Section style={containerContact}>
            <Row
              align="left"
              style={{
                float: "left",
              }}
            >
              <Column style={{ width: "60%" }}>
                <Img
                  src={`https://website-tau-pink.vercel.app/LogoGodrivesPng.png`}
                />
              </Column>
              <Column
                style={{
                  paddingRight: "4px",
                  float: "right",
                }}
              >
                <Column>
                  <Link href="https://www.youtube.com/@GODrives/videos">
                    <Img
                      width="32"
                      height="32"
                      src={`https://website-tau-pink.vercel.app/PngYoutube.png`}
                    />
                  </Link>
                </Column>
                <Column style={{ paddingInline: "12px" }}>
                  <Link href="https://www.instagram.com/go.drives/">
                    <Img
                      width="33"
                      height="33"
                      src={`https://website-tau-pink.vercel.app/PngInstagram.png`}
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="https://www.linkedin.com/company/go-drives/posts/?feedView=all">
                    <Img
                      width="32"
                      height="32"
                      src={`https://website-tau-pink.vercel.app/PngLinkedin.png`}
                    />
                  </Link>
                </Column>
              </Column>
            </Row>
            <Row>
              <Text
                style={{
                  fontSize: "12px",
                  color: "#F4F5F5",
                  marginBottom: "0",
                }}
              >
                {" "}
                R. 42 - QD 64 - LT 24 - Cardoso Continuação, Aparecida de
                Goiânia - GO
              </Text>
              <Text
                style={{ fontSize: "12px", color: "#F4F5F5", marginTop: "0" }}
              >
                +55 62 99881-7695
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#dbddde",
  fontFamily: "Poppins",
}

const sectionLogo = {
  padding: "0 24px",
}

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
  padding: "50px 50px",
}

const containerContact = {
  backgroundColor: "#5E7F9C",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  padding: "20px",
}

const heading = {
  fontSize: "20px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#094472",
}

const paragraphContent = {
  padding: "0 24px",
}

const paragraphContentFooter = {
  padding: "0 24px",
  margin: "40px 0 0 0",
}

const paragraphList = {
  paddingLeft: 40,
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
}

const paragraphContactText = {
  fontSize: "16px",
  lineHeight: "22px",
  color: "#3c4043",
  fontWeight: "600",
  margin: "0 0 20px 0",
}

const paragraphContainerContact = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#F4F5F5",
}

const link = {
  ...paragraph,
  color: "#004dcf",
}

const hr = {
  margin: "24px 0",
  borderColor: "#5E7F9C",
  opacity: "40%",
}

const footer = {
  maxWidth: "100%",
}

const formInputTitle = {
  fontSize: "16px",
  lineHeight: "22px",
  color: "#061724",
  fontWeight: "600",
  margin: "2px 0",
}

const formInputText = {
  fontSize: "16px",
  lineHeight: "22px",
  color: "#061724",
  fontWeight: "500",
  margin: "2px 0",
}

const formInputContent = {
  marginBottom: "10px",
}
