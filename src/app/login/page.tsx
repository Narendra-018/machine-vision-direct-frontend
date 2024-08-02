import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Group,
  Stack,
  TextInput,
} from "@mantine/core";
import styles from "./login.module.css";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Machine Vision Direct",
};

function LoginPage() {
  return (
    <Group className={styles["login-page-root-div"]}>
      <Flex className={styles["image-container"]}>
        <Link 
          className={styles["home-link"]}
          href={"/"}
        >
          <Image width={8334} height={2004} src={"/logo.png"} alt="Logo" />
        </Link>
      </Flex>
      <Divider orientation="vertical" size={2} color={`var(--mvd-dark-blue)`} />
      <Flex className={styles["login-form-wrapper"]}>
        <Stack className={styles["login-form-and-heading-container"]}>
          <h1 className={styles["login-heading"]}>Login</h1>
          <form className={styles["login-form"]}>
            <TextInput
              className={`${styles["email-input"]} ${styles["login-input"]}`}
              label="Email"
            />

            <TextInput
              className={`${styles["email-input"]} ${styles["login-input"]}`}
              label="Password"
            />

            <Checkbox
              className={styles["remember-me-checkbox"]}
              label="Remember Me"
            />

            <Stack
              className={
                styles[
                  "login-form-submit-btn-and-forgot-password-btns-container"
                ]
              }
            >
              <Button className={`${styles["login-form-submit-btn"]}`}>
                Log In
              </Button>
              <Button
                className={styles["forgot-password-btn"]}
                variant="transparent"
              >
                Forgot Password
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Group>
  );
}

export default LoginPage;
