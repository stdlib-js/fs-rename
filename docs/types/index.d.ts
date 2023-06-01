/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Callback invoked after renaming a file.
*/
type Nullary = () => void;

/**
* Callback invoked after renaming a file.
*
* @param err - error argument
*/
type Unary = ( err: Error | null ) => void;

/**
* Callback invoked after renaming a file.
*
* @param err - error argument
*/
type Callback = Nullary | Unary;

/**
* Interface for renaming a file.
*/
interface Rename {
	/**
	* Renames a file.
	*
	* @param oldPath - old path
	* @param newPath - new path
	* @param clbk - callback to invoke after renaming a path
	*
	* @example
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* rename( './beep/boop.txt', './beep/foo.txt', done );
	*/
	( oldPath: string | Buffer, newPath: string | Buffer, clbk: Callback ): void;

	/**
	* Synchronously renames a file.
	*
	* @param oldPath - old path
	* @param newPath - new path
	* @returns error object or null
	*
	* @example
	* var err = rename.sync( './beep/boop.txt', './beep/foo.txt' );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	sync( oldPath: string | Buffer, newPath: string | Buffer ): Error | null;
}

/**
* Asynchronously renames a file.
*
* @param oldPath - old path
* @param newPath - new path
* @param clbk - callback to invoke after renaming a path
*
* @example
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* rename( './beep/boop.txt', './beep/foo.txt', done );
*
* @example
* var err = rename.sync( './beep/boop.txt', './beep/foo.txt' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
declare var rename: Rename;


// EXPORTS //

export = rename;
