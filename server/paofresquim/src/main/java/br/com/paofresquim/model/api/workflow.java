package br.com.paofresquim.model;
import java.io.*;
import java. net.*;

public class workflow {
    public static void main(String[] args) throws Exception {
        URL url = new URL("https://geral-n8n.yzqq8i.easypanel.host/webhook/dante");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        conn.setRequestProperty("Content-Type", "application/json");

        String json = "{\"nome\":\"Allysson\"}";

        OutputStream os = conn.getOutputStream();
        os.write(json.getBytes());
        os.flush();

        System.out.println(conn.getResponseCode());
    }

}
