import React from 'react';

const BlogDetails1 = () => {
    return (
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            When it comes to choosing a database the biggest decisions is
            picking a relational (SQL) or non-relational (NoSQL) data structure.
            While both the databases are viable options still there are certain
            key differences between the two that users must keep in mind when
            making a decision. The Main Differences: Type – SQL databases are
            primarily called as Relational Databases (RDBMS); whereas NoSQL
            database are primarily called as non-relational or distributed
            database. Language – SQL databases defines and manipulates data
            based structured query language (SQL). Seeing from a side this
            language is extremely powerful. SQL is one of the most versatile and
            widely-used options available which makes it a safe choice
            especially for great complex queries. But from other side it can be
            restrictive. SQL requires you to use predefined schemas to determine
            the structure of your data before you work with it. Also all of your
            data must follow the same structure. This can require significant
            up-front preparation which means that a change in the structure
            would be both difficult and disruptive to your whole system. A NoSQL
            database has dynamic schema for unstructured data. Data is stored in
            many ways which means it can be document-oriented, column-oriented,
            graph-based or organized as a KeyValue store. This flexibility means
            that documents can be created without having defined structure
            first. Also each document can have its own unique structure. The
            syntax varies from database to database, and you can add fields as
            you go. Scalability – In almost all situations SQL databases are
            vertically scalable. This means that you can increase the load on a
            single server by increasing things like RAM, CPU or SSD. But on the
            other hand NoSQL databases are horizontally scalable. This means
            that you handle more traffic by sharding, or adding more servers in
            your NoSQL database. It is similar to adding more floors to the same
            building versus adding more buildings to the neighborhood. Thus
            NoSQL can ultimately become larger and more powerful, making these
            databases the preferred choice for large or ever-changing data sets.
            Structure – SQL databases are table-based on the other hand NoSQL
            databases are either key-value pairs, document-based, graph
            databases or wide-column stores. This makes relational SQL databases
            a better option for applications that require multi-row transactions
            such as an accounting system or for legacy systems that were built
            for a relational structure. Property followed – SQL databases follow
            ACID properties (Atomicity, Consistency, Isolation and Durability)
            whereas the NoSQL database follows the Brewers CAP theorem
            (Consistency, Availability and Partition tolerance). Support – Great
            support is available for all SQL database from their vendors. Also a
            lot of independent consultations are there who can help you with SQL
            database for a very large scale deployments but for some NoSQL
            database you still have to rely on community support and only
            limited outside experts are available for setting up and deploying
            your large scale NoSQL deployments. Key highlights on SQL vs NoSQL:
            SQL NoSQL RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
            Non-relational or distributed database system. These databases have
            fixed or static or predefined schema They have dynamic schema These
            databases are not suited for hierarchical data storage. These
            databases are best suited for hierarchical data storage. These
            databases are best suited for complex queries These databases are
            not so good for complex queries Vertically Scalable Horizontally
            scalable Follows ACID property Follows CAP(consistency,
            availability, partition tolerance) Examples: MySQL, PostgreSQL,
            Oracle, MS-SQL Server, etc Examples: MongoDB, GraphQL, HBase, Neo4j,
            Cassandra, etc
          </p>
        </div>
      </div>
    );
};

export default BlogDetails1;