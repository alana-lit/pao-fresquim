package br.com.paofresquim.service.testeservice;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.Scanner;

public class TesteNotificacaoService {

    /*
     * URL API SMS
     */
    private static final String URL_API = "https://us-central1-sms-gateway-ae7e1.cloudfunctions.net/api_sms_send";

    /*
     * TOKEN API
     */
    private static final String API_KEY = "";

    /*
     * TELEFONE DESTINO
     */
    private static final String TELEFONE = "+5534991614690";

    /*
     * QUANTIDADE MÁXIMA DE TENTATIVAS
     */
    private static final int MAX_TENTATIVAS = 3;

    public static void main(String[] args) {

        enviarSmsComRetry();
    }

    public static void enviarSmsComRetry() {

        int tentativa = 1;

        boolean enviado = false;

        while (tentativa <= MAX_TENTATIVAS && !enviado) {

            System.out.println("\n=================================");

            System.out.println("TENTATIVA " + tentativa);

            System.out.println("=================================\n");

            try {

                /*
                 * MENSAGEM
                 */
                String mensagem = "TESTE SMS AUTOMÁTICO - " + LocalDateTime.now();

                /*
                 * JSON BODY
                 */
                String json = "{" + "\"phoneNumber\":\"" + TELEFONE + "\"," + "\"message\":\"" + mensagem + "\"" + "}";

                /*
                 * URL
                 */
                URL url = new URL(URL_API);

                /*
                 * CONEXÃO
                 */
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();

                connection.setRequestMethod("POST");

                connection.setRequestProperty("Content-Type", "application/json");

                connection.setRequestProperty("X-API-Key", API_KEY);

                connection.setDoOutput(true);

                /*
                 * ENVIA BODY
                 */
                OutputStream os = connection.getOutputStream();

                os.write(json.getBytes());

                os.flush();
                os.close();

                /*
                 * RESPONSE
                 */
                int responseCode = connection.getResponseCode();

                System.out.println("STATUS HTTP: " + responseCode);

                /*
                 * SUCESSO
                 */
                if (responseCode >= 200 && responseCode < 300) {

                    Scanner scanner = new Scanner(connection.getInputStream());

                    StringBuilder response = new StringBuilder();

                    while (scanner.hasNextLine()) {

                        response.append(scanner.nextLine());
                    }

                    scanner.close();

                    System.out.println("\nSMS ENVIADO COM SUCESSO");

                    System.out.println("RESPONSE: " + response);

                    enviado = true;

                } else {

                    Scanner scanner = new Scanner(connection.getErrorStream());

                    StringBuilder erro = new StringBuilder();

                    while (scanner.hasNextLine()) {

                        erro.append(scanner.nextLine());
                    }

                    scanner.close();

                    throw new RuntimeException("HTTP " + responseCode + " - " + erro);
                }

            } catch (Exception e) {

                System.out.println("\nERRO AO ENVIAR SMS");

                System.out.println("MOTIVO: " + e.getMessage());

                tentativa++;

                /*
                 * RETRY
                 */
                if (tentativa <= MAX_TENTATIVAS) {

                    System.out.println("\nREENVIANDO EM 5 SEGUNDOS...");

                    try {

                        Thread.sleep(5000);

                    } catch (InterruptedException ex) {

                        Thread.currentThread().interrupt();
                    }

                } else {

                    System.out.println("\nLIMITE DE TENTATIVAS ATINGIDO");
                }
            }
        }
    }
}
//
//package br.com.paofresquim.service; import java.io.BufferedReader; import java.io.InputStream; import java.io.InputStreamReader; import java.io.OutputStream; import java.net.HttpURLConnection; import java.net.URL; import java.time.LocalDateTime; import java.util.List; import java.util.Map;
//
//public class TesteNotificacaoService { /* * URL DO GATEWAY */
//    private static final String URL_GATEWAY = "https://us-central1-sms-gateway-ae7e1.cloudfunctions.net/api_sms_send"; /* * API KEY */
//    private static final String API_KEY = ""; /* * TELEFONE DESTINO */
//    private static final String TELEFONE = "+5534996465826"; /* * QUANTIDADE DE RETENTATIVAS */
//    private static final int MAX_TENTATIVAS = 3;
//
//    public static void main(String[] args) {
//        enviarSms();
//    }
//
//    public static void enviarSms() {
//        int tentativa = 1;
//        boolean enviado = false;
//        while (tentativa <= MAX_TENTATIVAS && !enviado) {
//            HttpURLConnection connection = null;
//            try {
//                System.out.println("\n=================================================");
//                System.out.println("TENTATIVA: " + tentativa);
//                System.out.println("=================================================\n"); /* * MENSAGEM */
//                String mensagem = "TESTE GATEWAY SMS - " + LocalDateTime.now(); /* * JSON */
//                String json = "{" + "\"phoneNumber\":\"" + TELEFONE + "\"," + "\"message\":\"" + mensagem + "\"" + "}"; /* * EXIBE REQUEST */
//                System.out.println("URL GATEWAY:");
//                System.out.println(URL_GATEWAY);
//                System.out.println("\nJSON ENVIADO:");
//                System.out.println(json); /* * URL */
//                URL url = new URL(URL_GATEWAY); /* * INICIO TEMPO */
//                long inicio = System.currentTimeMillis(); /* * CONEXAO */
//                connection = (HttpURLConnection) url.openConnection();
//                connection.setRequestMethod("POST");
//                connection.setDoOutput(true);
//                connection.setConnectTimeout(15000);
//                connection.setReadTimeout(15000); /* * HEADERS REQUEST */
//                connection.setRequestProperty("Content-Type", "application/json");
//                connection.setRequestProperty("X-API-Key", API_KEY); /* * ENVIA BODY */
//                OutputStream outputStream = connection.getOutputStream();
//                outputStream.write(json.getBytes("UTF-8"));
//                outputStream.flush();
//                outputStream.close(); /* * HTTP STATUS */
//                int httpStatus = connection.getResponseCode(); /* * FIM TEMPO */
//                long fim = System.currentTimeMillis();
//                long tempoResposta = fim - inicio; /* * MENSAGEM HTTP */
//                String httpMessage = connection.getResponseMessage(); /* * SERVIDOR GATEWAY */
//                String servidor = connection.getHeaderField("Server"); /* * CONTENT TYPE */
//                String contentType = connection.getHeaderField("Content-Type"); /* * EXIBE RETORNO PRINCIPAL */
//                System.out.println("\n================ RETORNO GATEWAY ================");
//                System.out.println("HTTP STATUS: " + httpStatus);
//                System.out.println("HTTP MESSAGE: " + httpMessage);
//                System.out.println("SERVIDOR GATEWAY: " + servidor);
//                System.out.println("CONTENT TYPE: " + contentType);
//                System.out.println("TEMPO RESPOSTA: " + tempoResposta + " ms"); /* * TODOS HEADERS */
//                System.out.println("\n================ HEADERS GATEWAY ================");
//                for (Map.Entry<String, List<String>> header : connection.getHeaderFields().entrySet()) {
//                    System.out.println(header.getKey() + " : " + header.getValue());
//                } /* * INPUT OU ERROR STREAM */
//                InputStream inputStream;
//                if (httpStatus >= 200 && httpStatus < 300) {
//                    inputStream = connection.getInputStream();
//                } else {
//                    inputStream = connection.getErrorStream();
//                } /* * LEITURA RESPONSE */
//                StringBuilder response = new StringBuilder();
//                if (inputStream != null) {
//                    BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
//                    String linha;
//                    while ((linha = reader.readLine()) != null) {
//                        response.append(linha).append("\n");
//                    }
//                    reader.close();
//                } else {
//                    response.append("GATEWAY NÃO RETORNOU BODY");
//                } /* * BODY COMPLETO */
//                System.out.println("\n================ BODY GATEWAY ===================");
//                System.out.println(response); /* * SUCESSO */
//                if (httpStatus >= 200 && httpStatus < 300) {
//                    System.out.println("\nSMS ENVIADO COM SUCESSO");
//                    enviado = true;
//                } else {
//                    throw new RuntimeException("\nFALHA GATEWAY SMS\n" + "HTTP STATUS: " + httpStatus + "\n" + "HTTP MESSAGE: " + httpMessage + "\n" + "SERVIDOR: " + servidor + "\n" + "BODY: " + response + "\n" + "TEMPO: " + tempoResposta + " ms");
//                }
//            } catch (Exception e) {
//                System.out.println("\n================ ERRO DETALHADO =================");
//                e.printStackTrace();
//                tentativa++; /* * RETRY */
//                if (tentativa <= MAX_TENTATIVAS) {
//                    System.out.println("\nNOVA TENTATIVA EM 5 SEGUNDOS...");
//                    try {
//                        Thread.sleep(5000);
//                    } catch (InterruptedException ex) {
//                        Thread.currentThread().interrupt();
//                    }
//                } else {
//                    System.out.println("\nLIMITE DE TENTATIVAS ATINGIDO");
//                }
//            } finally {
//                if (connection != null) {
//                    connection.disconnect();
//                }
//            }
//        }
//    }
//}