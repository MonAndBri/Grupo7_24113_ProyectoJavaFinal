package conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionDB {

    private static final String url = "jdbc:mysql://localhost:3306/proyectojava_24113_g7";
    private static final String user = "root";
    private static final String password = "Abril24.";

    public static Connection obtenerConexion() throws SQLException {
        
        try {
            // Cargar el driver
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new SQLException("No se encontró el driver JDBC", e);
        }
        return DriverManager.getConnection(url, user, password);
    }
      
}
