import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { ScrollRestoration } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='my-10 px-4 md:px-6 max-w-5xl mx-auto'>
            <ScrollRestoration />
            <div className="mb-12 space-y-2 text-center">
                <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
                <h2 className="text-2xl font-bold md:text-4xl">4 React JS Q&A</h2>
                <p className="lg:w-5/12 lg:mx-auto">Learn how to think in Node with step-by-step explanations and interactive examples.</p>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-base-100 border-slate-100 rounded-lg shadow-lg">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        1. Difference between SQL and NoSQL
                    </h5>
                    <table className="text-left w-full border-collapse mt-4">
                        <thead>
                            <tr>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">SQL</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Databases are categorized as Relational Database Management System (RDBMS).</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NoSQL databases are categorized as Non-relational or distributed database system.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">SQL databases have fixed or static or predefined schema.</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NoSQL databases have dynamic schema.

                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">SQL databases display data in form of tables so it is known as table-based database.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">SQL databases are vertically scalable.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NoSQL databases are horizontally scalable.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">SQL databases are best suited for complex queries.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">SQL databases are not best suited for hierarchical data storage.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NoSQL databases are best suited for hierarchical data storage.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of NoSQL database
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-base-100 border-slate-100 rounded-lg mt-8 shadow-lg">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-primary to-green-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        2. What is JWT, and how does it work?
                    </h5>
                    <div className="text-md mt-4">
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br />

                        <p className='text-xl font-semibold'>How it works?</p>
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

                        <br />
                        <ul className='ml-2 my-3'>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <p>
                                    User sign-in using username and password or google/facebook.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <p>
                                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <p>
                                    User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <p>
                                    Resource server then verifies the authenticity of the token using the secret salt/ public key.
                                </p>
                            </li>
                            <li className='flex items-center gap-1 pb-2'>
                                <IoCheckmarkSharp className='text-xl' /> <p>
                                    Must use HTTPS to secure the Authorization headers.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-base-100 border-slate-100 rounded-lg mt-8 shadow-lg">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        3. What is the difference between javascript and NodeJS?
                    </h5>
                    <table className="text-left w-full border-collapse mt-4">
                        <thead>
                            <tr>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">JavaScript</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Node JS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Javascript is a programming language that is used for writing scripts on the website. </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    NodeJS is a Javascript runtime environment for executing Js on the server.

                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">It is basically used on the client-side.</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    It is mostly used on the server-side.</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Javascript is capable enough to add HTML and play with the DOM. </td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Nodejs does not have capability to add HTML tags.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">Javascript is used in frontend development.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    Nodejs is used in server-side development.
                                </td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-4 px-6 border-b border-grey-light">It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++.	</td>
                                <td className="py-4 px-6 border-b border-grey-light">
                                    It uses C, C++, and JavaScript.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="relative block p-8 overflow-hidden border bg-base-100 border-slate-100 rounded-lg mt-8 shadow-lg">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-600"></span>

                <div>
                    <h5 className="text-2xl font-bold">
                        4. How does NodeJS handle multiple requests at the same time?
                    </h5>
                    <p className="text-md mt-4">
                        We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br /><br />

                        <span className='text-xl font-semibold'>How NodeJS handle multiple client requests:</span><br />
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        <br /><br />

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;